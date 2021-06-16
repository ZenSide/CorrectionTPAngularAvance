import {TestBed} from '@angular/core/testing';

import {BooksService} from './books.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Book} from "../entity/book.entity";

describe('BooksService', () => {
  let service: BooksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(BooksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  })

  it('should return array of book', () => {
    const books: Book[] = [{title: 'A'} as Book, {title: 'B'} as Book];
    service.getAll().subscribe((response) => {
      const allEquals = books.every((value, index) => value==response[index]);
      expect(allEquals).toBeTruthy();
    })
    const requete = httpTestingController.expectOne('/book');
    requete.flush(books);
  })

});
