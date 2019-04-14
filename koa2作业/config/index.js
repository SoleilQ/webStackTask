const _ = require('loadsh');
const {join } = require('path');
let config = {
  'viewDir': join(__dirname, '..', 'views'),
  'staticDir': join(__dirname, '..', 'public')
}
if (process.env.NODE_ENV == "development") {
  const localConfig = {
    port: 3000
  }
  config = _.extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
  const localConfig = {
    port: 80
  }
  config = _.extend(config, localConfig);
}

module.exports = config;

//基础的mvc
//构建于项目内容 es6
//工程化的推进
//工程化的前后端分离 webpack
//mvc 改革 di ioc
//css 进行进化 现代化的css
//整个项目包括node 进行性能优化