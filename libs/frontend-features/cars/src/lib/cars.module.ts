import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { carsRoutes } from './lib.routes';
import { CarDetailsComponent } from './features/car-details/car-details.component';
import { CarsListComponent } from './features/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './services/cars.service';
import { UiModule } from '@nx-carstore-monorepo/shared/ui';
import { CardModule } from 'primeng/card'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(carsRoutes),
    HttpClientModule,
    UiModule,
    CardModule,
  ],
  providers: [CarsService],
  declarations: [CarDetailsComponent, CarsListComponent],
})
export class CarsModule {}
