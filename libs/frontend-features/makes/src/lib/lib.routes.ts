import { Route } from '@angular/router';
import { MakesListComponent } from './features/makes-list/makes-list.component';

export const makesRoutes: Route[] = [
  { path: '', component: MakesListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
