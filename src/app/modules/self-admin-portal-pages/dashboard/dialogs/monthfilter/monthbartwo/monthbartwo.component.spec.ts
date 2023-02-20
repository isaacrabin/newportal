import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthbartwoComponent } from './monthbartwo.component';

describe('MonthbartwoComponent', () => {
  let component: MonthbartwoComponent;
  let fixture: ComponentFixture<MonthbartwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthbartwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthbartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
