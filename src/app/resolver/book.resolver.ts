import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {BooksService} from "../service/books.service";
import {Book} from "../entity/book.entity";

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {

  constructor(private bookService:BooksService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {

    const id = route.paramMap.get('id');
    return this.bookService.getOneById(+id);
  }
}
