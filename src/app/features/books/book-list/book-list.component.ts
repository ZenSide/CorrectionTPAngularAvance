import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../../service/books.service";
import {Book} from "../../../entity/book.entity";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }

}
