import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  @Input()
  control: AbstractControl;

  @Input()
  fieldName: string;

  constructor() { }

  ngOnInit(): void {
  }

  showError(errorCode: string) {
    return this.control.touched && this.control.hasError(errorCode);
  }
}
