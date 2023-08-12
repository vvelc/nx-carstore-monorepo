import { Component, signal, OnInit, ViewEncapsulation } from '@angular/core';
import { ICar } from '@nx-carstore-monorepo/shared/interfaces';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'nx-carstore-monorepo-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsListComponent implements OnInit {
  cars = signal<ICar[]>([]);

  constructor(private carsService: CarsService){}
  
  getMakes() {
    this.carsService.getCars().subscribe((res) => {
      this.cars.update(() => res.data);
    });
  }

  ngOnInit() {
    this.getMakes();
  }
}
