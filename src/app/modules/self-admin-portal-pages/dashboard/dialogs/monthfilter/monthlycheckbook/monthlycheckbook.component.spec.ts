import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlycheckbookComponent } from './monthlycheckbook.component';

describe('MonthlycheckbookComponent', () => {
  let component: MonthlycheckbookComponent;
  let fixture: ComponentFixture<MonthlycheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlycheckbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlycheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
