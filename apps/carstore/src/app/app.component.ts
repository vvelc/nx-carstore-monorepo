import { Component } from '@angular/core';
import { NavLink } from '@nx-carstore-monorepo/shared/ui';

@Component({
  selector: 'nx-carstore-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carstore';

  navLinks: NavLink[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Makes',
      url: '/makes',
    },
    {
      label: 'Car List',
      url: '/cars',
    },
    {
      label: 'Car Details 123',
      url: '/cars/123',
    }
  ]
}
