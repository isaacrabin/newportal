import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatebartwoComponent } from './datebartwo.component';

describe('DatebartwoComponent', () => {
  let component: DatebartwoComponent;
  let fixture: ComponentFixture<DatebartwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatebartwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatebartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
