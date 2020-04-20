const routes = require('next-routes');

module.exports = routes()
    .add('/', 'home/index')
    .add('/sobre-a-empresa', 'about_company/index')
    .add('/contato', 'contact/index')