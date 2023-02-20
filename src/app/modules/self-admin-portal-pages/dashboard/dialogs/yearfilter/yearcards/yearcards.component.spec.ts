import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcardsComponent } from './yearcards.component';

describe('YearcardsComponent', () => {
  let component: YearcardsComponent;
  let fixture: ComponentFixture<YearcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
