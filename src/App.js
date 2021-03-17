import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import messages from './i18n/zh';

import { Dashboard } from './dashboard';

import assets from './assets';
import datacenters from './datacenters';
import departments from './departments';
import deviceclasses from './deviceclasses';
import devicemodels from './devicemodels';

import users from './users';

import dataProviderFactory from './dataProvider';

const i18nProvider = polyglotI18nProvider(locale => {

    return messages;
}, 'zh');

const App = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        let restoreFetch;

        const fetchDataProvider = async () => {

            setDataProvider(
                await dataProviderFactory(process.env.REACT_APP_DATA_PROVIDER)
            );
        };

        fetchDataProvider();

        return restoreFetch;
    }, []);

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }
    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
        >
            <Resource name="assets" {...assets} />
            <Resource name="datacenters" {...datacenters} />
            <Resource name="departments" {...departments} />
            <Resource name="deviceclasses" {...deviceclasses} />
            <Resource name="devicemodels" {...devicemodels} />
            <Resource name="users" {...users} />
        </Admin>
    );
};

export default App;
