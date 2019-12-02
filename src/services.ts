import axios,{ AxiosInstance, AxiosRequestConfig} from 'axios';
import { config } from './config';
export class Service {

   async getNews() {
        const host = config.news_url;
        console.log(config.news_url);
        const client = this._axiosFactory(host);
      try {
        const res =  await client.get('/api/news', {
            headers:{
                "X-AppKey": "2014_MyBMW837",
                "x-btcapi-usid": "05e4c12d-2182-4862-928a-a08cc79a5dec"
            }
        })
        return res.data;
      } catch (e) {
          console.log(e);
      }
    }

    async getDiscover() {
        const host = config.service_url;
        console.log(host);
        const client = this._axiosFactory(host);
        try {
            const res = await client.get('/api/servicemanager/v0/discoverallservices/v1?region=cn&locale=zh-cn&client=IOS&brand=1',{
                headers: {
                    "AppVersion": "10.3.0",
                    "AppKey": "51dee986-d5b2-4af1-b129-4eaedc6c32b6"
                }
            })
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    private _axiosFactory(host?: string) {
        return axios.create({
            baseURL: host,
            timeout: 30000
        })
    }
}

/**
 * {
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
}
 * 
*/