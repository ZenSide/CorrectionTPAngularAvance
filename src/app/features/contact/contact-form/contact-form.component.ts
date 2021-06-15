import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {noBadWordsValidator} from "../../../validators/no-bad-words.validator";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    subject: new FormControl('', [
      Validators.required, Validators.maxLength(90)
    ]),
    message: new FormControl('', {
      validators: [Validators.required, noBadWordsValidator]
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

}
