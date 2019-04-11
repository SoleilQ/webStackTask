const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = 'heelo';
})
router.get('/books.html', async (ctx, next) => {
  ctx.body = await ctx.render('books');
});

router.get('/api/books', (ctx, next) => {
  console.log(ctx.request);
});

module.exports = router;