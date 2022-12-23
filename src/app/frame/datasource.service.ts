import { DataSource, ObjectLiteral, EntityTarget, Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class DataSourceService {
  private dataSource: DataSource;
  constructor() {
    this.dataSource = new DataSource({
      type: 'mysql',
      host: '192.168.18.218',
      port: 3306,
      username: 'lazyhealth_test',
      password: 'fnua5vhfEVRPSUei',
      database: 'lazyhealth_test',
      entities: [
        '/Users/lanren/project/nest-demo/dist/app/home/test.entity.js',
      ],
      synchronize: true,
    });
  }
  getRepository<Entity extends ObjectLiteral>(
    target: EntityTarget<Entity>,
  ): Repository<Entity> {
    return this.dataSource.getRepository(target);
  }
  getDataSource(): DataSource {
    return this.dataSource;
  }
  async init() {
    await this.dataSource.initialize();
  }
}
