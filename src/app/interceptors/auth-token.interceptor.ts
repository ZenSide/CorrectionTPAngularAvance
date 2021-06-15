import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let headers = {};
    if (this.authService.isConnected){
      // add token to request
      headers['Authorization'] = 'Bearer '+this.authService.token;
    }

    return next.handle(request.clone({setHeaders:headers}));
  }
}
