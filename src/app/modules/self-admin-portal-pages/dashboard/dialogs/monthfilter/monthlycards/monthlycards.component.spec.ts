import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlycardsComponent } from './monthlycards.component';

describe('MonthlycardsComponent', () => {
  let component: MonthlycardsComponent;
  let fixture: ComponentFixture<MonthlycardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlycardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
