import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
import customRoutes from './routes';
import messages from './i18n/zh';

import { Dashboard } from './dashboard';

import zones from './zones';
import rrs from './rrs';

import domains from './domains';

import accounts from './accounts';

import switchGroups from './switch_groups';

import icps from './icps';

import tickets from './tickets';

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
            customRoutes={customRoutes}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
        >
            <Resource name="zones/:zone_id/rrs" options={{ label: 'rrs' }} {...rrs} />
            <Resource name="zones" {...zones} />

            <Resource name="domains" {...domains} />

            <Resource name="accounts" {...accounts} />

            <Resource name="icps" {...icps} />

            <Resource name="tickets" {...tickets} />

            <Resource name="switch_groups" {...switchGroups} />
        </Admin>
    );
};

export default App;
