import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get categories', ()=>{

    const unordered = ['B','F','DD'];
    service.categories = unordered;
    const categories = service.getCategories();

    for (let i=0;i<unordered.length;i++) {
      expect(unordered[i]).toEqual(categories[i]);
    }
  })
  it('should get ordered categories', ()=>{

    const unordered = ['B','F','DD'];
    service.categories = unordered;

    const categories = service.getOrderedCategories();
    const ordered = unordered.sort();

    for (let i=0;i<ordered.length;i++) {
      expect(ordered[i]).toEqual(categories[i]);
    }
  })
});
