import { bootstrap as worker } from './app/main';
import { bootstrap as master, logger } from './agent/main';

async function start() {
  if (process.env.INSTANCE_ID !== undefined) {
    // pm2 cluster mode
    if (process.env.INSTANCE_ID === '0') {
      logger.info(
        '-----------master--begin',
        'process.env.INSTANCE_ID=',
        process.env.INSTANCE_ID,
      );
      await master();
      logger.info('-----------master--end');
    } else {
      logger.info(
        '-----------worker--begin',
        'process.env.INSTANCE_ID=',
        process.env.INSTANCE_ID,
      );
      await worker();
      logger.info('-----------worker--end');
    }
  } else {
    // 单进程启动模式
    master();
    worker();
  }
}

start();
