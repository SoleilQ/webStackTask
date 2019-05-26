/**
 * @fileoverview 实现Index的数据模型
 * @author qth
 */

const SafeRquest = require('../utils/safeRequest');

/**
 * Index类 获取数据关于图书数据相关的类
 * @class
 */
class Index {
  /**
   * @constructor
   * @param {string} app  KOA2的上下文
   */
  constructor(app) {

  }

  /**
   * 获取后台数据全部图书列表的方法
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData(options)
   */
  getData(options) {
    const safeRquest = new SafeRquest("books/index");
    return safeRquest.fetch({});
  }

  /**
   * 把用户传过来的数据保存进入接口
   * @param {*} options 配置项
   * @example
   * return new Promise
   * saveData(options)
   */
  saveData(options) {
    const safeRquest = new SafeRquest("books/create");
    return safeRquest.fetch({
      method: "post",
      params: options.params
    });
  }
}

module.exports = Index;