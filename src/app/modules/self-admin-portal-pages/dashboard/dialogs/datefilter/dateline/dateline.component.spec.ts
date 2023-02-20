import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatelineComponent } from './dateline.component';

describe('DatelineComponent', () => {
  let component: DatelineComponent;
  let fixture: ComponentFixture<DatelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
