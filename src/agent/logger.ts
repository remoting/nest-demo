import { Configuration, getLogger } from 'log4js';
export const buildDefaultConfig = (): Configuration => {
  const pmId =
    process.env.INSTANCE_ID !== undefined
      ? process.env.INSTANCE_ID
      : process.pid;
  return {
    disableClustering: true,
    appenders: {
      file: {
        type: 'file',
        filename: './logs/server' + pmId + '.log',
        maxLogSize: 1024 * 1024 * 50,
        encoding: 'utf-8',
        backups: 3,
        keepFileExt: true,
        layout: {
          type: 'pattern',
          pattern: '%d{yyyy-MM-dd hh.mm.ss.SSS} %f{1} %l %o %p %c %m',
        },
      },
      console: {
        type: 'stdout',
        layout: {
          type: 'pattern',
          pattern: '%d{yyyy-MM-dd hh.mm.ss.SSS} %f{1} %l %o %p %c %m',
        },
      },
    },
    categories: {
      default: {
        appenders: ['file', 'console'],
        level: 'ALL',
        enableCallStack: true,
      },
    },
  };
};
