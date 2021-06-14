import { Component, OnInit } from '@angular/core';
import {Book} from "../../../entity/book.entity";
import {BooksService} from "../../../service/books.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private bookService:BooksService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.book = this.bookService.getOneById(+id);
  }

}
