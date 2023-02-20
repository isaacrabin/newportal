import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateprofilesComponent } from './dateprofiles.component';

describe('DateprofilesComponent', () => {
  let component: DateprofilesComponent;
  let fixture: ComponentFixture<DateprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
