import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories:string[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  loadOrdered(){
    this.categories = this.categoryService.getOrderedCategories();
  }

}
