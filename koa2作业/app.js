const Koa = require('koa');
const co = require('co');
const render = require('koa-swig');
const serve = require('koa-static');
const path = require('path');
const log4js = require('log4js');
const errHandle = require('./middleware/errHandler');
const config = require('./config');
const app = new Koa();
log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'logs/yd.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}}
});
const logger = log4js.getLogger();
//错误处理
errHandle.error(app, logger);
app.use(serve(config.staticDir));
//初始化所以的路由
require('./controllers')(app);
app.context.render = co.wrap(render({
  root: config.viewDir ,
  autoescape: true,
  //ssr渲染的性能的瓶颈 都在一句话
  cache: 'memory', // disable, set to false
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));


app.listen(config.port, () => {
  console.log('🍺🌭Server is running');
});