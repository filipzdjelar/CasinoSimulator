var koa = require('koa');
var bodyParser = require('koa-bodyparser');

var app = koa();

app.use(bodyParser());

app.use(async ctx => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object {}
  ctx.body = ctx.request.body;
});



app.listen(80);
