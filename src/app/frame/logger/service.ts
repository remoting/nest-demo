import { LoggerService as BaseLoggerService, Injectable } from '@nestjs/common';
import { buildDefaultConfig } from '../../../agent/logger';
import { Logger, configure, Configuration, shutdown, getLogger } from 'log4js';
@Injectable()
export class LoggerService implements BaseLoggerService {
  private loggers: Map<string, Logger>;
  constructor() {
    this.loggers = new Map();
    const options: Configuration = buildDefaultConfig();
    configure(options);
  }

  getLogger(loggerName = 'APP') {
    let logger = this.loggers.get(loggerName);
    if (!logger) {
      logger = getLogger(loggerName);
      this.loggers.set(loggerName, logger);
    }
    logger.callStackLinesToSkip = 3;
    /*
    logger.setParseCallStackFunction(
      (error: Error, linesToSkip: number): CallStack => {
        //
        return {
          functionName: '1',
          fileName: 'a',
          lineNumber: 2,
          columnNumber: 1,
          callStack: '',
        };
      },
    );
    */
    return logger;
  }

  log(message: any, context?: string) {
    this.getLogger(context).info(message);
  }

  error(message: any, trace?: string, context?: string) {
    this.getLogger(context).error(message, trace);
  }

  warn(message: any, context?: string) {
    this.getLogger(context).warn(message);
  }

  debug(message: any, context?: string) {
    this.getLogger(context).debug(message);
  }

  flushall(cb?: () => void) {
    shutdown(() => {
      cb && cb();
    });
  }
}
