import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {GeneralModule} from './features/general/general.module';
import {HomeModule} from './features/home/home.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./interceptors/api-prefix.interceptor";
import {HttpErrorsInterceptor} from "./interceptors/http-errors.interceptor";
import {HttpCacheInterceptor} from "./interceptors/http-cache.interceptor";
import {ContactModule} from './features/contact/contact.module';
import {LoginModule} from './features/login/login.module';
import {AuthTokenInterceptor} from "./interceptors/auth-token.interceptor";
import {RequestsCancelerInterceptor} from "./interceptors/requests-canceler.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GeneralModule,
    HomeModule,
    HttpClientModule,
    ContactModule,
    LoginModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestsCancelerInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
