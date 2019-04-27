//未来将把浏览器的代码和后台的代码相互替换和或者拷贝
const fetch = require('node-fetch');
const config =  require('../config');
class SafeRequst {
  constructor(url) {
    this.url = url;
    this.baseUrl = config.baseUrl;
  }
  fetch(options) {
    //产生一个完整的链接  发起一个promise的结果
    let ydfetch = fetch(this.baseUrl + this.url);
    if(options) {
      ydfetch = fetch(this.baseUrl + this.url, {
        method: options.method,
        body: options.params
      });
    }
    return new Promise((reslove, reject) => {
      let result = {
        code: 0,
        message: "",
        data: []
      }
      ydfetch
      .then(res=> {
        let _json = [];
        try {
          _json = res.json();
        } catch (error) {
          //☎
        }
        return _json;
      })
      .then(json =>{
        //你们产线跟后端定了一些api的交互形式
        result.data = json;
        reslove(result);
      }).catch((error)=>{
        result.code = 1;
        result.message = "node-fetch和后端通讯异常✖";
        reject(result);
      })
    })
  }
}
module.exports = SafeRequst;