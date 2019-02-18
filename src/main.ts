import oCluster from 'cluster';
import Os from 'os';
import Koa from 'koa';
import json from 'koa-json';

import { requestUndefinedPath } from './middlewares';

import oRouter from './routers/index';
import { HTTP } from './configs/index';

const iCPULength = 1;


// if (oCluster.isMaster) {
//   console.log(`主进程 ${process.pid} 正在运行`);
//   for (let i = 0; i < iCPULength; i++) {
//     oCluster.fork();
//   }
//   oCluster.on('exit', (worker, code, signal) => {
//     console.log(`工作进程 ${worker.process.pid} 已退出`);
//   });
// }else {

//   const oMain = new Koa();

//   oMain.use(json({ pretty: true, param: 'pretty' }));
//   oMain.use(oRouter.routes()).use(oRouter.allowedMethods());
//   oMain.use(requestUndefinedPath());

//   oMain.listen(HTTP.PORT, () => {
//     console.log('server is running')
//   });
// }

const oMain = new Koa();

oMain.use(json({ pretty: true, param: 'pretty' }));
oMain.use(oRouter.routes()).use(oRouter.allowedMethods());
oMain.use(requestUndefinedPath());

oMain.listen(HTTP.PORT, () => {
  console.log('server is running on port ' + HTTP.PORT);
});