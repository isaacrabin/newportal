import { TestBed } from '@angular/core/testing';

import { MarkercheckerService } from './markerchecker.service';

describe('MarkercheckerService', () => {
  let service: MarkercheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkercheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
