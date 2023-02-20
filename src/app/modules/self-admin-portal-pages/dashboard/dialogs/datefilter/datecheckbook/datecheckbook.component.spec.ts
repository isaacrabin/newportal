import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecheckbookComponent } from './datecheckbook.component';

describe('DatecheckbookComponent', () => {
  let component: DatecheckbookComponent;
  let fixture: ComponentFixture<DatecheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecheckbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
