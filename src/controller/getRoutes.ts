import Router from '@koa/router';
import { apis } from './apis.js';

export function getRoutes() {
  const router = new Router();
  for (let api of apis) {
    router[api.method]?.(api.path, api.handler);
  }
  return router.routes();
}
