import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { MySqlService } from './mysql.service';

@Module({})
export class FrameModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: FrameModule,
      providers: [
        ConfigService,
        {
          provide: MySqlService,
          useFactory: () => {
            return new MySqlService();
          },
        },
      ],
      exports: [ConfigService, MySqlService],
    };
  }
}
