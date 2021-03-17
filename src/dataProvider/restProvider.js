import { stringify } from 'query-string';
import { fetchUtils, DataProvider } from 'ra-core';
import inMemoryJWT from './inMemoryJWT';

/**
 * Maps react-admin queries to a simple REST API
 *
 * This REST dialect is similar to the one of FakeRest
 *
 * @see https://github.com/marmelab/FakeRest
 *
 * @example
 *
 * getList     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
 * getOne      => GET http://my.api.url/posts/123
 * getMany     => GET http://my.api.url/posts?filter={id:[123,456,789]}
 * update      => PUT http://my.api.url/posts/123
 * create      => POST http://my.api.url/posts
 * delete      => DELETE http://my.api.url/posts/123
 *
 * @example
 *
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 * import simpleRestProvider from 'ra-data-simple-rest';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={simpleRestProvider('http://path.to.my.api/')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */
export default (
    apiUrl,
    passedHttpClient = fetchUtils.fetchJson,
    countHeader = 'Content-Range'
) => {
    const httpClient = (url) => {
        const options = {
            headers: new Headers({ Accept: 'application/json' }),
        };
        const token = inMemoryJWT.getToken();
        if (token) {
            options.headers.set('Authorization', `Bearer ${token}`);
        }

        return fetchUtils.fetchJson(url, options);
    };

    return ({
        getList: (resource, params) => {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;

            const rangeStart = (page - 1) * perPage;
            const rangeEnd = page * perPage - 1;

            const query = {};

            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            const url = `${apiUrl}/${resPath}?${stringify(query)}`;
            const options = {};

            return httpClient(url, options).then(({ headers, json }) => {
                const data = json.data || [];
                return {
                    data: data,
                    total: data.length,
                };
            });
        },

        getOne: (resource, params) => {
            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            return httpClient(`${apiUrl}/${resPath}/${params.id}`).then(({ json }) => ({
                data: json,
            }))
        },

        getMany: (resource, params) => {
            const query = {
            };
            const url = `${apiUrl}/${resource}?${stringify(query)}`;
            return httpClient(url).then(({ json }) => ({ data: json.data || [] }));
        },

        getManyReference: (resource, params) => {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;

            const rangeStart = (page - 1) * perPage;
            const rangeEnd = page * perPage - 1;

            const query = {
            };
            const url = `${apiUrl}/${resource}?${stringify(query)}`;
            const options =
                countHeader === 'Content-Range'
                    ? {
                        // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
                        headers: new Headers({
                            Range: `${resource}=${rangeStart}-${rangeEnd}`,
                        }),
                    }
                    : {};

            return httpClient(url, options).then(({ headers, json }) => {

                return {
                    data: json,
                    total: parseInt(headers.get(countHeader.toLowerCase())),
                };
            });
        },

        update: (resource, params) => {
            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            return httpClient(`${apiUrl}/${resPath}/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            }).then(({ json }) => ({ data: json }))
        },

        // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
        updateMany: (resource, params) =>
            Promise.all(
                params.ids.map(id =>
                    httpClient(`${apiUrl}/${resource}/${id}`, {
                        method: 'PUT',
                        body: JSON.stringify(params.data),
                    })
                )
            ).then(responses => ({ data: responses.map(({ json }) => json.id) })),

        create: (resource, params) => {
            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            return httpClient(`${apiUrl}/${resPath}`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(({ json }) => ({
                data: { ...params.data, id: json.id },
            }))
        },

        delete: (resource, params) => {
            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            return httpClient(`${apiUrl}/${resPath}/${params.id}`, {
                method: 'DELETE',
            }).then(({ json }) => ({ data: json }))
        },

        // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        deleteMany: (resource, params) => {
            let resPath = resource;
            if (resource.includes(':zone_id')) {
                const reg = /\/zones\/(\w+)\//;
                const id = reg.exec(window.location.hash)[1];
                resPath = resource.replace(':zone_id', id);
            }

            return Promise.all(
                params.ids.map(id =>
                    httpClient(`${apiUrl}/${resPath}/${id}`, {
                        method: 'DELETE',
                    })
                )
            ).then(responses => ({ data: responses.map(({ json }) => json.id) }))
        },
    });
};