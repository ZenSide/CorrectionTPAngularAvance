import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import {Book} from "../../../entity/book.entity";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {BookComponent} from "../../../shared/components/book/book.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {BooksModule} from "../books.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports:[HttpClientTestingModule, BooksModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return array of book', () => {
    const books: Book[] = [{title: 'A'} as Book, {title: 'B'} as Book];
    const requete = httpTestingController.expectOne('/book');
    requete.flush(books);

    fixture.detectChanges();

    const titles = fixture.nativeElement.querySelectorAll('.card-title');
    const titleEquals = books.every((book, index) => book.title == titles[index].innerText)

  })
});
