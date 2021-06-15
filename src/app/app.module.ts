import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './features/general/menu/menu.component';
import { FooterComponent } from './features/general/footer/footer.component';
import { BooksModule } from './features/books/books.module';
import {SharedModule} from "./shared/shared.module";
import { HomeComponent } from './features/home/home/home.component';
import { GeneralModule } from './features/general/general.module';
import { HomeModule } from './features/home/home.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "./interceptors/api-prefix.interceptor";
import {HttpErrorsInterceptor} from "./interceptors/http-errors.interceptor";
import {HttpCacheInterceptor} from "./interceptors/http-cache.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    SharedModule,
    GeneralModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
