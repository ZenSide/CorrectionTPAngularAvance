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
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
