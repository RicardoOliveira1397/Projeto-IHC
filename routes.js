const routes = require("next-routes");

module.exports = routes()
  .add(`/next-wp`, "home/index")
  .add(`/next-wp/sobre-a-empresa`, "about_company/index")
  .add(`/next-wp/contato`, "contact/index");
