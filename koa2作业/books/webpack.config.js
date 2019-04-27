const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
// const _mergeConfig = require(`./config/webpack.${_mode}`);
console.log(argv('🐘', argv.mode));