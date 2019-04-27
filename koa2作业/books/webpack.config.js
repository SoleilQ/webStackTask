const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}`);
const merge = require('webpack-merge');
const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.entry.js');
for (let item of files) {
  if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)/.test(item)) {
    const entryKey = RegExp.$1;
    //html-plugin
    //注册插件 html-plugin 送到dist之前拦截 插入静态资源
  }
}
_entry = {};
let webpackConfig = {
  entry: _entry
}
module.exports = merge(webpackConfig, _mergeConfig);