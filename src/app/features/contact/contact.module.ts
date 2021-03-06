import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ContactFormComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule
    ]
})
export class ContactModule { }
