import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../../service/books.service";
import {Book} from "../../../entity/book.entity";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectBooks} from "../../../store/book/book.selectors";
import {loadBooks} from "../../../store/book/book.actions";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private store:Store,private router:Router) {
  }

  ngOnInit(): void {
    this.store.select(selectBooks).subscribe(books=>{
      this.books = books;
    });
    this.store.dispatch(loadBooks());
  }

  showBookDetails(book: Book) {
    this.router.navigate(['/books/details/'+book.id]);
  }
}
