import { Route } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MakesComponent } from './features/makes/makes.component';
import { CarsComponent } from './features/cars/cars.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'makes',
    component: MakesComponent,
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
];
