import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbarComponent } from './yearbar.component';

describe('YearbarComponent', () => {
  let component: YearbarComponent;
  let fixture: ComponentFixture<YearbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
