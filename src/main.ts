import Koa from 'koa';
import Router from 'koa-router';
import { config } from './config';
import { Service } from './services';
import { DiscoverService } from 'discover1-node-pacakge';

const app = new Koa();
const router = new Router();

router.get('/api/v1/discover', async (ctx) => {
    const service = new DiscoverService();
    const appKey1 = ctx.get('X-AppKey');
    const appUsid1 = ctx.get('x-btcapi-usid');
    const headers1 = {
        'X-AppKey': appKey1,
        'x-btcapi-usid': appUsid1
    }
    const appVersion = ctx.get('AppVersion');
    const appKey = ctx.get('AppKey'); 
    const path = ctx.path;
    const params = ctx.query;
    const headers = {
        'AppVersion': appVersion,
        'AppKey': appKey
    }
    const [news, services] = await Promise.all([
        service.getNews(config.news_url, headers1),
        service.getDiscover(config.service_url, headers, params)
    ])
    ctx.body = {"news": news, "services": services};
})

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