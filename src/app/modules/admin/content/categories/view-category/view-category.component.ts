import { Component, OnInit, DoCheck} from '@angular/core';
import {Http} from '@angular/http';
import {url} from '../../../../expoters/url';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit, DoCheck {
  baseUrl = url;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private http: Http) {
    this.allCategories();
  }

  ngOnInit() {
  }
  ngDoCheck() {
    this.allCategories();
  }
  allCategories() {
    this.http.get(this.baseUrl + 'categories/allCategories').subscribe(categories => {
      this.data = JSON.parse(categories['_body']).data;
    });
  }
  remove(id: number) {
    this.http.delete(this.baseUrl + 'categories/deleteCategory?category_id=' + id).subscribe(data => {
      console.log(data);
    });
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
