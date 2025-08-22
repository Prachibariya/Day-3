const Koa = require('koa');
const app = new Koa();

// Middleware function
app.use(async ctx => {
  ctx.body = 'Hello from Koa.js!';
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
