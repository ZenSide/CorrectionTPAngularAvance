import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "../home/home/home.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [MenuComponent, FooterComponent],
  exports: [MenuComponent, FooterComponent],
  imports: [
    SharedModule
  ]
})
export class GeneralModule { }
