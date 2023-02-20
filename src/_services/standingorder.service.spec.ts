import { TestBed } from '@angular/core/testing';

import { StandingorderService } from './standingorder.service';

describe('StandingorderService', () => {
  let service: StandingorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandingorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
