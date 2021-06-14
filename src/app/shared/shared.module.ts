import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import { FullnamePipe } from './pipes/fullname.pipe';
import { BookComponent } from './components/book/book.component';
import {Book} from "../entity/book.entity";


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [RouterModule, CommonModule, NgbModule, FullnamePipe, BookComponent],
  declarations: [
    FullnamePipe,
    BookComponent
  ]
})
export class SharedModule {
}
