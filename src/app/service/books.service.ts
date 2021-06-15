import {Injectable} from '@angular/core';
import {Book} from "../entity/book.entity";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
}
