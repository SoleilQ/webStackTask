const errHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        logger.error(err);
        ctx.status = 500;
        ctx.body = "😭哇哦网站出错了~";
      }
    })
  }
}

module.exports = errHandler;