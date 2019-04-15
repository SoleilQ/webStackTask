const router = require('koa-simple-router');
const IndexController = require('./indexController');
const indexcontroller = new IndexController();
module.exports = (app) => {
  app.use(router(_ => {
    _.get('/', indexcontroller.actionIndex());
    _.get('/index.html', indexcontroller.actionIndex());
    _.get('/add.html', indexcontroller.actionAdd());
  }))
}