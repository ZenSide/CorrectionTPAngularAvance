import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BooksService} from "../../../service/books.service";
import {Book} from "../../../entity/book.entity";
import Swal from "sweetalert2";
import {Store} from "@ngrx/store";
import {addBook} from "../../../store/book/book.actions";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  bookGroup:FormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    description: new FormControl('',{}),
    author: new FormGroup({
      firstname: new FormControl('', {
        validators: [Validators.required]}),
      lastname: new FormControl('',{
        validators: [Validators.required]})
    })
  });

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  async submit() {
    if (this.bookGroup.invalid) return;

    this.store.dispatch(addBook({book:this.bookGroup.value as Book}));
    Swal.fire('Livre ajouté !');
    this.bookGroup.reset();
  }

  get title(){
    return this.bookGroup.get('title');
  }
  get firstname(){
    return this.bookGroup.get('author').get('firstname');
  }
  get lastname(){
    return this.bookGroup.get('author').get('lastname');
  }
}
