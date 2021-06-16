import { TestBed } from '@angular/core/testing';

import { HttpCacheInterceptor } from './http-cache.interceptor';

describe('HttpCacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpCacheInterceptor
      ]
  }));

  xit('should be created', () => {
    const interceptor: HttpCacheInterceptor = TestBed.inject(HttpCacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
