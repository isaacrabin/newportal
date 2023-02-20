import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyalertsComponent } from './monthlyalerts.component';

describe('MonthlyalertsComponent', () => {
  let component: MonthlyalertsComponent;
  let fixture: ComponentFixture<MonthlyalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyalertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
