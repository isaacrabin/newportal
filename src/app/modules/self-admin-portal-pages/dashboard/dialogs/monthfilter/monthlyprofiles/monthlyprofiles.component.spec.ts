import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyprofilesComponent } from './monthlyprofiles.component';

describe('MonthlyprofilesComponent', () => {
  let component: MonthlyprofilesComponent;
  let fixture: ComponentFixture<MonthlyprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
