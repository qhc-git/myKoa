import Koa from 'koa';
import portfinder from 'portfinder';
import { getRoutes } from './controller/getRoutes.js';
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('url: ', ctx.url);
  await next();
});

app.use(getRoutes());

// 设置默认端口
portfinder.setBasePort(9000);

// 使用portfinder查找空闲端口
portfinder.getPortPromise().then(port => {
  app.listen(port, () => {
    console.log(`Koa is running on http://localhost:${port}`);
  });
});
