import inMemoryJWT from './dataProvider/inMemoryJWT';

export default {
    login: ({ username, password }) => {
        const request = new Request('/apis/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ code, msg, data }) => {
                if (code === 2000) {
                    return Promise.resolve(data);
                }
                throw new Error(msg);
            })
            .then(({ token }) => inMemoryJWT.setToken(token));
    },
    logout: () => {
        inMemoryJWT.ereaseToken();
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),
};
