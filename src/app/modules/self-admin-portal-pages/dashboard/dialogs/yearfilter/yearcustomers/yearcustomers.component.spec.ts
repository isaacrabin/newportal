import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcustomersComponent } from './yearcustomers.component';

describe('YearcustomersComponent', () => {
  let component: YearcustomersComponent;
  let fixture: ComponentFixture<YearcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearcustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
