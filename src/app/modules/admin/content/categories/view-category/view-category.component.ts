import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {CategoriesService} from '../../../../services/categories/categories.services';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public categoryService: CategoriesService) {
    this.allCategories();
  }

  ngOnInit() {
  }
  allCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.data = JSON.parse(categories['_body']).data;
      console.log(this.data);
    });
  }
}
