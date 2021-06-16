import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: string[] = ['Livre D', 'Super livre', 'Livre A', 'Livre C', 'Un beau livre'];

  getCategories() {
    return this.categories;
  }

  getOrderedCategories() {
    return [...this.categories].sort();
  }

  constructor() {
  }
}
