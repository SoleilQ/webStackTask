const Koa = require('koa');
const books = require('./controllers/BookControllers');
const co = require('co');
const render = require('koa-swig');
const serve = require('koa-static');
const path = require('path');
const app = new Koa();

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views') ,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

app.use(serve(__dirname + '/public'));
app.use(books.routes()).use(books.allowedMethods());
app.listen(8088, () => {
  console.log('Server is running');
});