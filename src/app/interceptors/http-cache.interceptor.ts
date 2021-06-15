import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from "rxjs/operators";

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  cache:{[key:string]:any} = {};

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = request.url;
    const method = request.method;
    if (method.toUpperCase() == 'GET') {
      const cacheResult = this.cache[url];
      if (cacheResult) {
        return of(cacheResult);
      }
    }
    return next.handle(request)
      .pipe(tap(result=>this.cache[url] = result));
  }
}
