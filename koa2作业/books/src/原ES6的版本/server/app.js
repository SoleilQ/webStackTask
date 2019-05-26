import Koa  from 'koa';
import co  from 'co';
import render  from 'koa-swig';
import serve  from 'koa-static';
import log4js  from 'log4js';
import errHandle  from './middleware/errHandler';
import config  from './config';
const app = new Koa();
log4js.configure({
  appenders: {cheese: {type: 'file', filename: 'logs/yd.log'}},
  categories: {default: {appenders: ['cheese'], level: 'error'}}
});
const logger =  log4js.getLogger();
//错误处理
errHandle.error(app, logger);
app.use(serve(config.staticDir));
//初始化所以的路由
from ('./controllers')(app);
app.context.render = co.wrap(render({
  root: config.viewDir ,
  autoescape: true,
  //ssr渲染的性能的瓶颈 都在一句话
  // cache: 'memory', // disable, set to false
  cache: false,
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));


app.listen(config.port, () => {
  console.log('🍺🐤Server is running');
});