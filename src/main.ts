import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

app.use(router.routes);
app.use(router.allowedMethods);

router.get('/api/news', async (ctx) => {
    ctx.body = "news";
});
app.use(async (ctx) => {
    ctx.body = 'hello world'; //单引号优先级高
    // const rt = ctx.respone.get('X-Reponse-Time');
    // console.log('${ctx.method} ${ctx.url} - ${rt}');
});

app.listen(8080);