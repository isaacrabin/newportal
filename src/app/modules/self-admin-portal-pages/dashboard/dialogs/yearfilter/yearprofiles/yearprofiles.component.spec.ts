import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearprofilesComponent } from './yearprofiles.component';

describe('YearprofilesComponent', () => {
  let component: YearprofilesComponent;
  let fixture: ComponentFixture<YearprofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearprofilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
