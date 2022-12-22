import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './service';

@Module({})
export class ConfigModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: ConfigModule,
      providers: [ConfigService],
      exports: [ConfigService],
    };
  }
}
