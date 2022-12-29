import { DataSourceService } from './datasource.service';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
@Module({})
export class FrameModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: FrameModule,
      providers: [
        ConfigService,
        {
          provide: DataSourceService,
          useFactory: async () => {
            const ds = new DataSourceService();
            await ds.init();
            return ds;
          },
        },
      ],
      exports: [ConfigService, DataSourceService],
    };
  }
}
