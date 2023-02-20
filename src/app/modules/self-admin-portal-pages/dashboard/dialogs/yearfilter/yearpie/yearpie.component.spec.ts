import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearpieComponent } from './yearpie.component';

describe('YearpieComponent', () => {
  let component: YearpieComponent;
  let fixture: ComponentFixture<YearpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearpieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
