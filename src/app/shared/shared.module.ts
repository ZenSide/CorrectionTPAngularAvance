import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import {FullnamePipe} from './pipes/fullname.pipe';
import {BookComponent} from './components/book/book.component';
import {Book} from "../entity/book.entity";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FormErrorComponent } from './components/form-error/form-error.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
    exports: [RouterModule, FormErrorComponent, ReactiveFormsModule, CommonModule, NgbModule, FullnamePipe, BookComponent, CounterComponent],
  declarations: [
    FullnamePipe,
    BookComponent,
    FormErrorComponent,
    CounterComponent
  ]
})
export class SharedModule {
}
