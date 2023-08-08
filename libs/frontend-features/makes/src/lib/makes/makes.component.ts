import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@nx-carstore-monorepo/shared/ui';

@Component({
  selector: 'nx-carstore-monorepo-makes',
  standalone: true,
  imports: [CommonModule, UiModule],
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.css'],
})
export class MakesComponent {}
