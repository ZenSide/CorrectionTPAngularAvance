import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  cache:{[key:string]:any} = {};

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // TODO: attention, le cache ne marche pas si la requete est annulée (httpCancelRequest)

    const url = request.url;
    const method = request.method;
    if (environment.useCache && method.toUpperCase() == 'GET') {
      const cacheResult = this.cache[url];
      if (cacheResult) {
        return of(cacheResult);
      }
    }
    return next.handle(request)
      .pipe(tap(result=>this.cache[url] = result));
  }
}
