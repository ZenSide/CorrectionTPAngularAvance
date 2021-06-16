import {Injectable} from '@angular/core';
import {Book} from "../entity/book.entity";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/book');
  }

  getOneById(id: number): Observable<Book> {
    return this.http.get<Book>('/book/' + id);
  }

  addBook(book: Book) {
    return this.http.post('/book', book);
  }
}
