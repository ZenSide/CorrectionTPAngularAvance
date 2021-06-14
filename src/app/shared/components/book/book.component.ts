import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../../entity/book.entity";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book:Book;

  @Input()
  mini:boolean = false;

  @Output()
  showMore = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    this.showMore.emit(this.book);
  }
}
