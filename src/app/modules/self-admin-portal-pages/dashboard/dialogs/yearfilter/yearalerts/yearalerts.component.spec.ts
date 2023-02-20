import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearalertsComponent } from './yearalerts.component';

describe('YearalertsComponent', () => {
  let component: YearalertsComponent;
  let fixture: ComponentFixture<YearalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearalertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
