import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../../entity/book.entity";
import {BooksService} from "../../../service/books.service";
import {ActivatedRoute} from "@angular/router";
import {BookComponent} from "../../../shared/components/book/book.component";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  @ViewChild(BookComponent, {static: true})
  bookComponent: BookComponent;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.book = this.activatedRoute.snapshot.data['book'];
  }


  showMini() {
    alert(this.bookComponent.mini ? 'il est mini':'il est pas mini');
  }
}
