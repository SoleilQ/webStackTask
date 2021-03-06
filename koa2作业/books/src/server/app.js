import Koa  from 'koa';
import co  from 'co';
import render  from 'koa-swig';
import serve  from 'koa-static';
import log4js  from 'log4js';
import errHandle  from './middleware/errHandler';
import config  from './config';
import {loadControllers, scopePerRequest} from 'awilix-koa';
import {asClass, asValue, Lifetime,createContainer} from "awilix";
const app = new Koa();
//整个IOC的过程来讲 容器最重要
const container = createContainer();
//要注入的所有类装载到container中
container.loadModules([__dirname + "/services/*.js"], {
  //制定以下当前注入的函数, 是以什么形式
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});
app.use(scopePerRequest(container));

//错误处理
errHandle.error(app, logger);
app.use(serve(config.staticDir));
//初始化所以的路由
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
//自动的装载路由
app.use(loadControllers(__dirname + "/controller/*.js"), {
  cwd
});
app.listen(config.port, () => {
  console.log('🍺🐤Server is running');
});