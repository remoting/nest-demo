import { DataSource, ObjectLiteral, EntityTarget, Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
@Injectable()
export class DataSourceService {
  private dataSource: DataSource;
  constructor() {
    this.dataSource = new DataSource({
      name: "default",
      type: 'mysql',
      host: '192.168.18.218',
      port: 3306,
      username: 'lazyhealth_test',
      password: 'fnua5vhfEVRPSUei',
      database: 'test',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
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
