import { TestBed } from '@angular/core/testing';

import { AuthTokenInterceptor } from './auth-token.interceptor';

describe('AuthTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthTokenInterceptor
      ]
  }));

  xit('should be created', () => {
    const interceptor: AuthTokenInterceptor = TestBed.inject(AuthTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
