import { TestBed } from '@angular/core/testing';

import { NxNico123xyLibService } from './nx-nico123xy-lib.service';

describe('NxNico123xyLibService', () => {
  let service: NxNico123xyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxNico123xyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
