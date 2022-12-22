import { bootstrap as worker } from './app/main';
import { bootstrap as master } from './agent/main';

async function start() {
  if (process.env.INSTANCE_ID !== undefined) {
    // pm2 cluster mode
    if (process.env.INSTANCE_ID === '0') {
      console.log(
        '-----------master--begin',
        'process.env.INSTANCE_ID=',
        process.env.INSTANCE_ID,
      );
      await master();
      console.log('-----------master--end');
    } else {
      console.log(
        '-----------worker--begin',
        'process.env.INSTANCE_ID=',
        process.env.INSTANCE_ID,
      );
      await worker();
      console.log('-----------worker--end');
    }
  } else {
    // 单进程启动模式
    master();
    worker();
  }
}

start();
