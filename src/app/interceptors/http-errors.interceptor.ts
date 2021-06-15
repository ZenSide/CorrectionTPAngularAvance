import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {

  constructor(private router:Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(err => {
        switch (err.status) {
          case 500 :
            Swal.fire('Erreur serveur','Une erreur est survenue','error')
            this.router.navigate([''])
            break;
        }
        return throwError(err);
      }));
  }
}
