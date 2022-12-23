import { MySqlService } from './../frame/mysql/service';
import { Controller, Get, Logger, Inject } from '@nestjs/common';
import { ConfigService } from '../frame/config/service';
import { HomeService } from './service';

@Controller()
export class HomeController {
  private readonly logger = new Logger(HomeController.name);
  @Inject()
  private readonly configService: ConfigService;
  @Inject()
  private readonly homeService: HomeService;
  @Inject()
  private readonly CONNECTION1: MySqlService;
  @Inject()
  private readonly connection2: MySqlService;
  constructor() {
    //
  }

  @Get('/index')
  getHello(): string {
    console.log(this.configService.get('database'));
    console.log(this.configService.get('age'));
    this.logger.log('AppController');
    this.CONNECTION1.query('s', null);
    this.connection2.query('s', null);
    return this.homeService.getHello();
  }
}
