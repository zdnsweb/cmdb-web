const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/apis",
    proxy({
      target: "http://jlccwss.vicp.cc:6666",
      changeOrigin: true
    })
  );
};