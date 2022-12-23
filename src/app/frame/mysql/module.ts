import { MySqlService } from './service';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class MySqlModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: MySqlModule,
      providers: [
        {
          provide: MySqlService,
          useFactory: () => {
            return new MySqlService();
          },
        },
      ],
      exports: [MySqlService],
    };
  }
}
