## Node介绍
- 它是一门使用 javaScript编写的后端语言.常用作`Client`和`Server`间的中间层,具有以下优点。
- 异步IO
- 性能
- 处理对象
- 安全性

## 开发前准备
开发环境：
操作系统： Mac/Win
IDE:VsCode
SDK：nodejs 10及以上
[Node 官网]：[http://nodejs.cn/download/](http://nodejs.cn/download/)
VScode 官网：[https://code.visualstudio.com/](https://code.visualstudio.com/)
Typescript 官网： http://www.typescriptlang.org/
Typescript文档： [https://www.tslang.cn/docs/handbook/generics.html](https://www.tslang.cn/docs/handbook/generics.html) 
vscode  
TSLint
Vscode 

### 工具： (Vscode RestClient) 
 - dotenv: [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
     - 只需要将程序的环境变量配置写在.env文件中,用于集中管理环境变量
 - npm: [https://www.npmjs.com/](https://www.npmjs.com/)
    - node package manager
 - pm2: [https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)
    - node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等
    - 参考连接: [https://www.cnblogs.com/wangcp-2014/p/10874417.html](https://www.cnblogs.com/wangcp-2014/p/10874417.html)
    - 官网介绍: [https://pm2.keymetrics.io/docs/usage/quick-start/](https://pm2.keymetrics.io/docs/usage/quick-start/) 
 - ts-node:
     - 编译+运行ts文件
 
### 需要使用的库文件
 - axios 
    - axios网址: [https://github.com/axios/axios](https://github.com/axios/axios) 
    - 加入项目的依赖文件中执行 `npm install axios`
    - `.env`为前`axios`所安装的项目配置环境变量用于调试。(需安装`DotENV`)
 - nodemon
   - 自动重启,通过配置默认的 `nodemon.json`文件,设置监控,忽略,文件扩展名,执行文件路径,配合`ts-node`。在主工程中指定入口为`nodemon`简化我们的项目运行步骤命令
 - Koa2: (轻量级的框架) [https://koa.bootcss.com/](https://koa.bootcss.com/)
   - 基于`node.js`平台的下一代web开发框架
- RestClient 
  - Api调用,其功能类似于Postmain
- iHost:
  - 用于修改本地主机连接的域名
- MWeb 
  - README文档记录
- TSLint: [https://palantir.github.io/tslint/usage/configuration/](https://palantir.github.io/tslint/usage/configuration/)
    - 美团TSLint介绍: [https://tech.meituan.com/2019/01/17/exploring-the-tslint-static-checking-tool-on-the-react-native-project.html](https://tech.meituan.com/2019/01/17/exploring-the-tslint-static-checking-tool-on-the-react-native-project.html)

## 发布
- 首先安装 nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换。
npm install -g nrm
- 添加Registry
nrm add npm 
- 添加账号
nrm adduser
- 输入账号密码

## 忽略文件
- .gitignore
- .npmignore
- 在 gitignore官网上生成ignore文件.


- 本地Registry搭建
  - verdaccio：[https://www.npmjs.com/package/verdaccio](https://www.npmjs.com/package/verdaccio)

## command 
- 编译 ts文件
 tsc [ts file]
- 运行js文件
node [js file ]
- 编译加运行,全局安装
npm install  -g -t ts-node
ts-node [ts file]
- 创建`nodejs`项目
 - `mkdir [your project name]` 
 - `npm init`
 - `tsc --init`
- 配置项目所需要的基础库
 - `npm install typescript --save-dev`
 - `npm install @types/node --save-dev`

### RestClient教程(类似Postman)
1. 安装: 
    Vscode中搜索 RestClient, 
2. 新建`api.http 或者 api.rest`文件.
3. 在对应文件中使用 `@[Paramters]`定义环境变量
4. 使用`GET/POST/METHOD/DELTE`等方法定义接口类型



## 1. 项目配置和环境搭建
1. mkdir node_demo_project
2. npm init 
3. 执行`tsc --init`初始化配置ts配置文件
4. `tsconfig.json`配置文件修改
5. new src/main.ts
6. npm install typescript --save-dev
7. npm install @types/node --save-dev
8. 修改package.json中的main的入口文件为`src/main.ts`
9. 安装相关库`npm install [--save-dev]  [库名字] ` 
```npm install --help
[--save-prod|
--save-dev|   #安装到`devDependencies`目录下，只有dev阶段使用
--save-optional] 
[--save-exact] 
[--no-save]
```

9. 所有依赖库安装如下:
```package.json
"devDependencies": {
"axios": "^0.19.0",
"bmw-news-api": "^1.0.2",
"koa": "^2.11.0",
"koa-router": "^7.4.0",
"rxjs": "^6.5.3"
},
"dependencies": {
"@types/koa": "^2.0.52",
"@types/koa-router": "^7.0.42",
"@types/node": "^12.12.8",
"dotenv": "^8.2.0",
"typescript": "^3.7.2"Å
}
```
### 2. 开始编写项目代码
2.1 进入到`src/main.ts`文件中
```tsc
//导入Koa框架, import * as Koa from ’Koa‘
import Koa from 'Koa';
import Router from 'Koa-router';
const app = new Koa();
const router = new Router();
//以下2行必须要放在借口调用的后面,放到前面就会出现`Resource not found`,奇葩的语法.先这样做吧。 
app.use(router.routes);  
app.use(router.allowedMethods);
app.listen(8080);
```
2.2 全局执行 tsc编译文件到 `dist`目录中
2.3 运行`dist/main.js`
2.3 浏览器确认   `localhost:8080`
2.4 端口占用解决方式 
```terminal
Use the ``-h'' option to get more help information.
LSCNM598058:node_project_demo qxq4633$ lsof -i:8080
COMMAND   PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    40006 qxq4633   23u  IPv6 0xb5637801e4e76bd1      0t0  TCP *:http-alt (LISTEN)
LSCNM598058:node_project_demo qxq4633$ kill -9 40006
LSCNM598058:node_project_demo qxq4633$ 
```

2.5 配置默认环境变量，
- 在项目的根目录新建 `env`文件用于存放环境变量, (依赖 `dotenv`读取)
    ```
    BASE_URL=http://domain1
    SERVICE_URL=https://domain2
    ```
- 在`.evn`中新建`config`文件. 配置我们的环境变量
```tsc
import * as evn from 'dotenv';
interface Config {
    Base_url?: string;
}
export const config: Config =  {
Base_url: process.env.BASE_URL
}
```
- 在`src/main.ts`中引入该文件
```tsc
import { config } from './config';
```
2.6 使用`axios`发送请求
- 新建Service,导入config配置的url文件
- 编写Service中具体的`GET`/`POST`/...网络请求方法
```tsc
import axios,{ AxiosInstance, AxiosRequestConfig} from 'axios';
import { config } from './config';
export class Service {
///以下为具体的实现代码
```
- 在`src/main.ts`文件中编写对应的实现代码
```
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
```
2.7 配置`nodemon`集成自动化构建.

- 在工程目录中添加`nodemon.josn`配置文件
```
{
    "watch":["src"],
    "ext": "ts",
    "ignore":["src/**/*.spec.ts"],
    "exec":"ts-node src/main.ts"
}
```
2.8 配置便利脚本开发
```
 "scripts": {
    "build": "tsc -p tsconfig.json",
    "run": "ts-node src.main.ts",
    "start": "tsc -p tsconfig.json && node dist/main.js",
    "start:dev": "nodemon",
    "pm2": "tsc -p tsconfig.json && pm2 start dist/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
2.9 配置`luanch.json` 和 `tasks.json` 启动不同环境以及断点调试
- Build Task
    ```
    //Build Task
{
            "type": "node",
            "request": "launch",
            "name": "Demo Project Debug",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/main.ts",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    // Configura Task
        {
            "type": "npm",
            "script": "test",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
  ```
 
### 3.NodeJs语法简介
1. Process: 代表nodejs运行程序,可以获取运行环境的各种信息

