import { TestBed } from '@angular/core/testing';

import { HttpErrorsInterceptor } from './http-errors.interceptor';

describe('HttpErrorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorsInterceptor
      ]
  }));

  xit('should be created', () => {
    const interceptor: HttpErrorsInterceptor = TestBed.inject(HttpErrorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
