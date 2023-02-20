import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepieComponent } from './datepie.component';

describe('DatepieComponent', () => {
  let component: DatepieComponent;
  let fixture: ComponentFixture<DatepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
