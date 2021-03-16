import simpleRestProvider from './restProvider';

const restProvider = simpleRestProvider('/apis');

const delayedDataProvider = new Proxy(restProvider, {});

export default delayedDataProvider;
