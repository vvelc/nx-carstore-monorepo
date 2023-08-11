import { Route } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'makes', 
    loadChildren: () => import('@nx-carstore-monorepo/frontend-features/makes').then(m => m.MakesModule)
  },
  {
    path: 'cars',
    loadChildren: () => import('@nx-carstore-monorepo/frontend-features/cars').then(m => m.CarsModule)
  },
];
