import {Injectable} from '@angular/core';
import {Book} from "../entity/book.entity";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [
    {id: 1, title: 'Les misérables', description: '', author: {id: 1, firsname: 'Victor', lastname: 'Hugo'}},
    {id: 2, title: 'Madame Bovary', description: '', author: {id: 2, firsname: 'Gustave', lastname: 'Flaubert'}},
    {id: 3, title: 'L\'étranger', description: '', author: {id: 3, firsname: 'Albert', lastname: 'Camus'}},
    {id: 4, title: 'Les fleurs du mal', description: '', author: {id: 4, firsname: 'Charles', lastname: 'Baudelaire'}},
    {id: 5, title: 'L\'écume des jours', description: '', author: {id: 5, firsname: 'Boris', lastname: 'Vian'}},
  ];

  constructor() {
  }

  getAll(): Book[] {
    return this.books;
  }

  getOneById(id: number): Book {
    return this.books.find(book => book.id == id)
  }
}
