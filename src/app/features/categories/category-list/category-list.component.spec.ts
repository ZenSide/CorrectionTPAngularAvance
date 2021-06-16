import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListComponent } from './category-list.component';
import {CategoryService} from "../../../service/category.service";

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let service: CategoryService;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CategoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should display unorded array', ()=>{
    const unorderedCategories = service.getCategories();

    const liArra = fixture.nativeElement.querySelectorAll('li');
    for (let i = 0; i <unorderedCategories.length; i++) {
      expect(liArra[i].innerText).toEqual(unorderedCategories[i]);
    }
  })

  it ('should display ordered array after btn click', ()=>{
    const orderedCategory = service.getOrderedCategories();

    const btn = fixture.nativeElement.querySelector('button');
    btn.click();
    fixture.detectChanges();

    const liArra = fixture.nativeElement.querySelectorAll('li');
    for (let i = 0; i <orderedCategory.length; i++) {
      expect(liArra[i].innerText).toEqual(orderedCategory[i]);
    }
  })
});
