import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, takeUntil} from "rxjs/operators";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {RequestCancelerService} from "../service/request-canceler.service";

@Injectable()
export class RequestsCancelerInterceptor implements HttpInterceptor {


  constructor(private router:Router, private requestCanceler: RequestCancelerService) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        // cancel all http request on navigation end
        this.requestCanceler.cancelAllPendingRequests();
      });
  }

  /**
   * Add takeUntil() on each request to cancel it on next() call on by cancelerSubject
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(takeUntil(this.requestCanceler.cancelerObservable));
  }
}
