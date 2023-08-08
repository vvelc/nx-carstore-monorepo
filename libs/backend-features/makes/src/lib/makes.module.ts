import { Module } from '@nestjs/common';
import { MakesController } from '../makes/makes.controller';
import { MakesService } from '../makes/makes.service';

@Module({
  controllers: [MakesController],
  providers: [MakesService],
  exports: [MakesController, MakesService],
})
export class MakesModule {}
