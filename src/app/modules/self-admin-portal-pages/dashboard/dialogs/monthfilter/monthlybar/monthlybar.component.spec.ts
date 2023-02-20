import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybarComponent } from './monthlybar.component';

describe('MonthlybarComponent', () => {
  let component: MonthlybarComponent;
  let fixture: ComponentFixture<MonthlybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlybarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
