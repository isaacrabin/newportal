import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlystandingorderComponent } from './monthlystandingorder.component';

describe('MonthlystandingorderComponent', () => {
  let component: MonthlystandingorderComponent;
  let fixture: ComponentFixture<MonthlystandingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlystandingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlystandingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
