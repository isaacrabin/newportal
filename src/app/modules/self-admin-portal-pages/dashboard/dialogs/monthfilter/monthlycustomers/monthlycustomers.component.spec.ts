import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlycustomersComponent } from './monthlycustomers.component';

describe('MonthlycustomersComponent', () => {
  let component: MonthlycustomersComponent;
  let fixture: ComponentFixture<MonthlycustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlycustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlycustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
