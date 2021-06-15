import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";
import {RequestsCancelerInterceptor} from "./interceptors/requests-canceler.interceptor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // a good place for all initialisation operations
    // this init will be launched only once in app lifetime
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: RouterEvent) => {
        console.log('route end');
      });
  }
}
