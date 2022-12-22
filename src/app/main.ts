import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from './config/module';
import { HomeModule } from './home/module';

@Module({
  imports: [ConfigModule.register(), HomeModule],
})
class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  await app.listen(3000);
}
