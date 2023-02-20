import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbartwoComponent } from './yearbartwo.component';

describe('YearbartwoComponent', () => {
  let component: YearbartwoComponent;
  let fixture: ComponentFixture<YearbartwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbartwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
