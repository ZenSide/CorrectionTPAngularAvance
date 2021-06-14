import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import { FullnamePipe } from './pipes/fullname.pipe';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [RouterModule, CommonModule, NgbModule, FullnamePipe],
  declarations: [
    FullnamePipe
  ]
})
export class SharedModule {
}
