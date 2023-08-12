import { OnInit, ViewEncapsulation, signal } from '@angular/core';
import { Component } from '@angular/core';
import { MakesService } from '../../services/makes.service';
import { IMake } from '@nx-carstore-monorepo/shared/interfaces';

@Component({
  selector: 'nx-carstore-monorepo-makes-list',
  templateUrl: './makes-list.component.html',
  styleUrls: ['./makes-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MakesListComponent implements OnInit {
  makes = signal<IMake[]>([]);

  constructor(private makesService: MakesService){}
  
  getMakes() {
    this.makesService.getMakes().subscribe((res) => {
      this.makes.update(() => res.data);
    });
  }

  ngOnInit() {
    this.getMakes();
  }
}  
