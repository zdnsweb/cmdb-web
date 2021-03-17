const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/apis",
    proxy({
      target: "http://cmdb-api.cmdb.svc:8000",
      changeOrigin: true,
      pathRewrite: {
        '^/apis/': '/', // remove base path
      },
    })
  );
};