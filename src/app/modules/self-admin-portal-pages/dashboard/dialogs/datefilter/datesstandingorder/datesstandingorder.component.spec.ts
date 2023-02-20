import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesstandingorderComponent } from './datesstandingorder.component';

describe('DatesstandingorderComponent', () => {
  let component: DatesstandingorderComponent;
  let fixture: ComponentFixture<DatesstandingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesstandingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesstandingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
