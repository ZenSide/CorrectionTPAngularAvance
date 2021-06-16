import { TestBed } from '@angular/core/testing';

import { RequestCancelerService } from './request-canceler.service';

describe('RequestCancelerService', () => {
  let service: RequestCancelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCancelerService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
