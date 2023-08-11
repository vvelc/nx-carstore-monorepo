import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MakesListComponent } from './makes-list.component';
import { UiModule } from '@nx-carstore-monorepo/shared/ui';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
describe('MakesListComponent', () => {
  let component: MakesListComponent;
  let fixture: ComponentFixture<MakesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakesListComponent],
      imports: [RouterTestingModule, HttpClientModule, UiModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MakesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
