import { Configuration, getLogger, configure, Logger } from 'log4js';
import { buildDefaultConfig } from './logger';
export async function bootstrap() {
  // to do
}
const options: Configuration = buildDefaultConfig();
configure(options);
export const logger = getLogger('agent');
