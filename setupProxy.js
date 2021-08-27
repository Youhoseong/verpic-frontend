const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/front",
    createProxyMiddleware({
      target: "http://spring:8080/",
      changeOrigin: true,
    })
  );
};
