import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatealertsComponent } from './datealerts.component';

describe('DatealertsComponent', () => {
  let component: DatealertsComponent;
  let fixture: ComponentFixture<DatealertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatealertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatealertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
