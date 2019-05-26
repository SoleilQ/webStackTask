/**
 * 首页IndexController
 */
import {route, GET} from "awilix-koa";
@route("/books")
class BooksController {
  constructor({indecService}) {
    //AOP 构造函数
    this.indecService = indexService
  }
  @route("/list")
  @GET()
  actionIndex() {
    return async (ctx, next) => {
      const data = this.indexService.data;
      ctx.body = await ctx.render('books/pages/index', {
        data
      })
    }
  }
  @route("/add")
  @GET()
  actionAdd() {
    return async (ctx, next) => {
      
      ctx.body = await ctx.render('books/pages/add', { 

      })
    }
  }
}

export default  BooksController;