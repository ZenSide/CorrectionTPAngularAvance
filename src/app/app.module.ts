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
import { CategoriesModule } from './features/categories/categories.module';
import { NamesModule } from './features/names/names.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromBook from './store/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book/book.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    LoginModule,
    CategoriesModule,
    NamesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([BookEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
