class IndexController {
  constructor() {

  }
  actionIndex() {
    return async (ctx, next) => {
      ctx.body = await ctx.render('index', {
        data: '京程一灯SSR'
      });
    }
  }

  actionAdd() {
    return async (ctx, next) => {
      ctx.body = await ctx.render('add');
    }
  }
}

module.exports = IndexController;