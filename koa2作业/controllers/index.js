const router = require('koa-simple-router');
const IndexController = require('./indexController');
const indexcontroller = new IndexController();
module.exports = (app) => {
  app.use(router(_ => {
    _.get('/', indexcontroller.actionIndex())
  }))
}