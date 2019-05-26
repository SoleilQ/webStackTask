/**
 * 首页IndexController
 */
import {route, GET} from "awilix-koa";
@route("/")
class IndexController {
  @route("/")
  actionIndex() {
    return async (ctx, next) => {
      ctx.body = "京程一灯";
    }
  }
}

export default  IndexController;