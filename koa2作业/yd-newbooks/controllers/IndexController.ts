import {
  Router,
  controller,
  httpGet,
  interfaces,
  inject
} from "../ioc";
import TYPES from "../constant/tags";

export default class IndexController implements interfaces.Controller {
    private indexService;
    constructor(@inject(TYPES.IndexServices) indexService) {
      this.indexService  =  indexService;
    }
    @httpGet("/")
    private async index(ctx: Router.IRouter, next:() =>Promise<any>):Promise<any> {
      const result:string = this.indexService.getUser();
      ctx.body = await ctx.render("index");
    }
}