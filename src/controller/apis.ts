import { Context } from 'koa';
async function loginHandler(ctx: Context) {
  ctx.body = {
    redirectUrl: null,
    success: true,
    user: {},
  };
}


async function getDevices(ctx: Context) {
  ctx.body = {
    success: true,
    code: '200',
    message: null,
    data: [],
    total: 235,
    page: 1,
    total_page: 3,
    page_size: 100,
  };
}

interface KoaApi {
  path: string;
  method: 'get' | 'post' | 'put' | 'del' | 'all';
  handler: (params: any) => Promise<any>;
}
export const apis: KoaApi[] = [
  {
    path: '/test/login',
    method: 'get',
    handler: loginHandler,
  },
  {
    path: '/test/devices',
    method: 'post',
    handler: getDevices,
  },
];
