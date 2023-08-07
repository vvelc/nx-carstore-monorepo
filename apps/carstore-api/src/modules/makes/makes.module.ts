import { Module } from '@nestjs/common';
import { MakesService } from './makes.service';
import { MakesController } from './makes.controller';

@Module({
  controllers: [MakesController],
  providers: [MakesService],
})
export class MakesModule {}
