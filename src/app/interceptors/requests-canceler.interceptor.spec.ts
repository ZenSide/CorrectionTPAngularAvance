import { TestBed } from '@angular/core/testing';

import { RequestsCancelerInterceptor } from './requests-canceler.interceptor';

describe('RequestsCancelerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestsCancelerInterceptor
      ]
  }));

  xit('should be created', () => {
    const interceptor: RequestsCancelerInterceptor = TestBed.inject(RequestsCancelerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
