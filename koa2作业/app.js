const Koa = require('koa');
const co = require('co');
const render = require('koa-swig');
const serve = require('koa-static');
const path = require('path');
const log4js = require('log4js');
const app = new Koa();
const logger = log4js.getLogger();

require('./controllers')(app);
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views') ,
  autoescape: true,
  //ssr渲染的性能的瓶颈 都在一句话
  cache: 'memory', // disable, set to false
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));

app.use(serve(__dirname + '/public'));
app.listen(8088, () => {
  console.log('🍺🌭Server is running');
});