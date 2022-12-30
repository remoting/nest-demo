import { Controller, Get, Logger, Inject } from '@nestjs/common';
import { ConfigService } from '../frame/config.service';
import { HomeService } from './service';

@Controller()
export class HomeController {
  private readonly logger = new Logger(HomeController.name);
  @Inject()
  private readonly configService: ConfigService;
  @Inject()
  private readonly homeService: HomeService;
  constructor() {
    //
  }

  @Get('/index')
  async getHello(): Promise<void> {
    console.log(this.configService.get('database'));
    console.log(this.configService.get('age'));
    this.logger.log('AppController');
    await this.homeService.getHello();
  }
}
