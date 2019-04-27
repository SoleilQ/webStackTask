//gulp 小任务 + 简单
//rollup 适合前端的库 react vue
//webpack 打包工具
const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');

const entry = './src/server/**/*.js';
//需要清洗的代码
const cleanEntry = './src/server/config/index.js'

//开发环境
function builddev() {
  return watch(entry, {ignoreInitial: false}, function() {
    gulp.src(entry)
      .pipe(babel({
        //关闭外部的babelrc
        babelrc: false,
        "plugins":['@babel/plugin-transform-modules-commonjs']
      }))
      .pipe(gulp.dest('dist'))
  })
}

//上线环境
function buildprod() {
  return watch(entry, {ignoreInitial: false}, function() {
    gulp.src(entry)
      .pipe(babel({
        //关闭外部的babelrc
        babelrc: false,
        ignore: [cleanEntry],
        "plugins":['@babel/plugin-transform-modules-commonjs']
      }))
      .pipe(gulp.dest('dist'))
  })
}

//清洗流
function buildconfig() {
  return gulp.src(entry)
    .pipe(rollup({
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ],
      output:{
        format: 'cjs'
      },
      input: cleanEntry
    }))
    .pipe(gulp.dest('dist'))
}

//代码校验
function buildhint() {
  return gulp.src(entry)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
}


let build = gulp.series(builddev);
//先完成核心的编译流程 + 清洗node的代码流程
if(process.env.NODE_ENV == 'production') {
  build = gulp.series(buildprod, buildconfig);
}
if(process.env.NODE_ENV == 'hint') {
  build = gulp.series(buildhint);
}
gulp.task("default", build);