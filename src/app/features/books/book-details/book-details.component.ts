import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../../entity/book.entity";
import {BooksService} from "../../../service/books.service";
import {ActivatedRoute} from "@angular/router";
import {BookComponent} from "../../../shared/components/book/book.component";
import {Store} from "@ngrx/store";
import {selectOneBook} from "../../../store/book/book.selectors";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  @ViewChild(BookComponent, {static: true})
  bookComponent: BookComponent;

  constructor(private store:Store,private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    // on n'utilise pas le resolve pour utiliser ngrx
    // this.book = this.activatedRoute.snapshot.data['book'];
    const bookId = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.select(selectOneBook,{bookId:+bookId})
      .subscribe(book=>{
        this.book=book;
      });
  }


  showMini() {
    alert(this.bookComponent.mini ? 'il est mini':'il est pas mini');
  }
}
