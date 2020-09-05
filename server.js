const { createServer } = require("http");
const next = require("next");
const routes = require("./routes");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const express = require("express");

const sitemapOptions = {
  root: __dirname + "/static/sitemap/",
  headers: {
    "Content-Type": "text/xml;charset=UTF-8",
  },
};

app.prepare().then(() => {
  const server = express();

  server.get("/sitemap.xml", (req, res) => {
    res.status(200).sendFile("sitemap.xml", sitemapOptions);
  });
  server.use(
    "/wp-admin",
    createProxyMiddleware({
      target: "https://agenciamk3digital.com.br/next-wp/wp-admin",
      changeOrigin: true,
    })
  );
  server
    .use(handler, (res) => {
      res.setHeader("Cache-Control", "public, max-age=365d, immutable");
    })
    .listen(3050);
});
