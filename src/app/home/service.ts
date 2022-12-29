import { DataSourceService } from '../frame/datasource.service';
import { Injectable, Logger, Inject } from '@nestjs/common';
import { Test } from './test.entity';

@Injectable()
export class HomeService {
  private readonly logger = new Logger(HomeService.name);
  @Inject()
  private readonly dataSourceService: DataSourceService;
  async getHello(): Promise<string | string> {
    this.logger.log('AppService');
    try {
      const allT = this.dataSourceService.getDataSource();

      const sss = await allT.query('select * from test_001');
      console.log(sss);
      const allUsers = await this.dataSourceService
        .getRepository(Test)
        .findOneBy({
          id: 1, // where "id" is your primary column name
        });
      console.log(allUsers);
    } catch (error) {
      console.error(error);
    }
    return Promise.resolve<string>('Hello s World!');
  }
}
