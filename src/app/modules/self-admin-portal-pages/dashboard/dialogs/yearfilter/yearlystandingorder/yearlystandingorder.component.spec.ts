import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlystandingorderComponent } from './yearlystandingorder.component';

describe('YearlystandingorderComponent', () => {
  let component: YearlystandingorderComponent;
  let fixture: ComponentFixture<YearlystandingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlystandingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlystandingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
