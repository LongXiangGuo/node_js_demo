import Koa from 'koa';
import Router from 'koa-router';
import * as evn from 'dotenv';
import { config } from './config';
import { Service } from './services';

const app = new Koa();
const router = new Router();

router.get('/api/news', async (ctx) => {
    const service = new Service();
    ctx.body = await service.getNews();
});

router.get('/api/discover', async (ctx) => {
    const service = new Service();
    //异步同时返回
    const [news, services] = await Promise.all([service.getNews(), service.getDiscover()]);
     ctx.body = {"news": news, "services": services};
    })

console.log(process.env.CURRENT_EVN );
console.log(process.env.BASE_URL );

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);
console.log(config.news_url);
console.log("success");

/**
 * app.use(async (ctx) => {
    ctx.body = 'hello world'; //单引号优先级高
    const rt = ctx.respone.get('X-Reponse-Time');
    console.log('${ctx.method} ${ctx.url} - ${rt}');
});

if (process.env.CURRENT_EVN = 'local') {
    evn.config();
}
*/