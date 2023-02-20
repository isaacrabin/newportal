import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecardsComponent } from './datecards.component';

describe('DatecardsComponent', () => {
  let component: DatecardsComponent;
  let fixture: ComponentFixture<DatecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
