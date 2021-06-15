import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('',
      {validators: [Validators.required, Validators.email]}),
    password: new FormControl('',
      {validators: [Validators.required]})
  });
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.authForm.invalid) return;

    this.authService.login(this.authForm.value)
      .subscribe(() => {
          //login ok
          this.router.navigate(['']);
        },
        error => {
          // login not ok
          this.errorMessage = 'Identifiants incorrects';
        })
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
}
