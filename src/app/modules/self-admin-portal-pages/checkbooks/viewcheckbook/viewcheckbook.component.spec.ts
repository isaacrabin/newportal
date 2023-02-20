import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcheckbookComponent } from './viewcheckbook.component';

describe('ViewcheckbookComponent', () => {
  let component: ViewcheckbookComponent;
  let fixture: ComponentFixture<ViewcheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcheckbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
