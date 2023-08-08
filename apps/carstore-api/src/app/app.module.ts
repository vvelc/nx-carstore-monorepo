import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from '@nx-carstore-monorepo/backend-features/cars';
import { MakesModule } from '@nx-carstore-monorepo/backend-features/makes';

@Module({
  imports: [CarsModule, MakesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
