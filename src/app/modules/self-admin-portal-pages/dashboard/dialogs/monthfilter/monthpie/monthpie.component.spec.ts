import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthpieComponent } from './monthpie.component';

describe('MonthpieComponent', () => {
  let component: MonthpieComponent;
  let fixture: ComponentFixture<MonthpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthpieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
