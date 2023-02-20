import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecustomersComponent } from './datecustomers.component';

describe('DatecustomersComponent', () => {
  let component: DatecustomersComponent;
  let fixture: ComponentFixture<DatecustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
