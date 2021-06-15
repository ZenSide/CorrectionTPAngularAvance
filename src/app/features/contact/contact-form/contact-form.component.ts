import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {noBadWordsValidator} from "../../../validators/no-bad-words.validator";
import {ContactService} from "../../../service/contact.service";
import {ContactMessage} from "../../../entity/contact-message.entity";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

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

  constructor(private contactService: ContactService, private router:Router) { }

  ngOnInit(): void {
  }

  async submit() {
    if (this.contactForm.invalid) return;

    await this.contactService.sendMessage(this.contactForm.value as ContactMessage);
    Swal.fire('Message envoyé', 'Nous vous recontacterons bientot');
    this.router.navigate(['']);
  }
}
