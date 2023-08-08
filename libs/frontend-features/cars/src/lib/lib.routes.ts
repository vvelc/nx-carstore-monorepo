import { Route } from '@angular/router';
import { CarsListComponent } from './features/cars-list/cars-list.component';
import { CarDetailsComponent } from './features/car-details/car-details.component';

export const carsRoutes: Route[] = [
  { path: '', component: CarsListComponent },
  { path: ':id', component: CarDetailsComponent },
];
