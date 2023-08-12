import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
