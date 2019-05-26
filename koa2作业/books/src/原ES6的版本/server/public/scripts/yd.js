//全局帮助类库
function yd() {}
yd._verson = 0.1;
yd.throttle = function (fn, wait) {
  var timer;
  return function (...args) {
    if (!timer) {
      //节流  进不来 缓存timer   指定时间内自清
      timer = setTimeout(() => timer = null, wait);
      return fn.apply(this, args);
    }
  }
}
//undersocre
