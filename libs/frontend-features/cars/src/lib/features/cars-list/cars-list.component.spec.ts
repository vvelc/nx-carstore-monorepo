import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsListComponent } from './cars-list.component';
import { CarsService } from '../../services/cars.service';
import { HttpClientModule } from '@angular/common/http';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CarsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
