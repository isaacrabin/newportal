import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcheckbookComponent } from './yearcheckbook.component';

describe('YearcheckbookComponent', () => {
  let component: YearcheckbookComponent;
  let fixture: ComponentFixture<YearcheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearcheckbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
