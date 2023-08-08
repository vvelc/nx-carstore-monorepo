import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { carsRoutes } from './lib.routes';
import { CarDetailsComponent } from './features/car-details/car-details.component';
import { CarsListComponent } from './features/cars-list/cars-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(carsRoutes)],
  declarations: [CarDetailsComponent, CarsListComponent],
})
export class CarsModule {}
