import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkercheckerComponent } from './markerchecker.component';

describe('MarkercheckerComponent', () => {
  let component: MarkercheckerComponent;
  let fixture: ComponentFixture<MarkercheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkercheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkercheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
