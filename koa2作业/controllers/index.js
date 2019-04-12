const _ = require('koa-simple-router');
const indexController = require('./indexController');
const indexcontroller = new indexController();
module.exports = (app) => {
  _.get('/', indexcontroller.actionIndex())
}