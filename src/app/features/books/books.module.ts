import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
