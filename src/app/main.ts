import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from './frame/config/module';
import { LoggerService } from './frame/logger/service';
import { HomeModule } from './home/module';
import { MySqlModule } from './frame/mysql/module';

@Module({
  imports: [ConfigModule.register(), MySqlModule.register(), HomeModule],
})
class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  await app.listen(3000);
}
