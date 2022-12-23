import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { FrameModule } from './frame/frame.module';
import { LoggerService } from './frame/logger.service';
import { HomeModule } from './home/module';

@Module({
  imports: [FrameModule.register(), HomeModule],
})
class AppModule {}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  await app.listen(3000);
}
