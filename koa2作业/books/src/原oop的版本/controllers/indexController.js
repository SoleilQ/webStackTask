/**
 * 首页IndexController
 */
const Index  = require('../models/Index');
// const {
//   URLSearchParams
// } = require('url');
const FormData = require('form-data');
class IndexController {
  constructor() {

  }
  actionIndex() {
    return async (ctx, next) => {
      const index = new Index();
      const result =  await index.getData();
      const data = result.data;
      ctx.body = await ctx.render('index', {
        data
      })
    }
  }

  actionAdd() {
    return async (ctx, next) => {
      const params = new URLSearchParams();
      params.append("Books[name]","测试");
      params.append("Books[category]","测试");
      const index = new Index();
      const result =  await index.saveData({
        params
      });
      ctx.body = result;
    }
  }
}

module.exports = IndexController;