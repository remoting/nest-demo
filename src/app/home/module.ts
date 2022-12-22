import { Module } from '@nestjs/common';
import { HomeController } from './controller';
import { HomeService } from './service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
