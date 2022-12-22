import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HomeService {
  private readonly logger = new Logger(HomeService.name);
  getHello(): string {
    this.logger.log('AppService');
    return 'Hello s World!';
  }
}
