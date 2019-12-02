import * as evn from 'dotenv';
import serveStatic = require('serve-static');

interface Config {
    news_url?: string;
    service_url?: string;
}

evn.config();
//BASE_URL  http://omcenewssvcestg.chinacloudsites.cn/api/news
export const config: Config =  {
    news_url: process.env.BASE_URL,
    service_url: process.env.SERVICE_URL
}
//omcenewssvcestg.chinacloudsites.cn