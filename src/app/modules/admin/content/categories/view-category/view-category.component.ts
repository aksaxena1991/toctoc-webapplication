import { Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {url} from '../../../../expoters/url';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
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

  allCategories() {
    this.http.get(this.baseUrl + 'categories/allCategories').subscribe(categories => {
      this.data = JSON.parse(categories['_body']).data;
    });
  }
  remove(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    this.http.delete(this.baseUrl + 'categories/deleteCategory?category_id=' + id, options).subscribe(data => {
      if(data.status === 200) {
        this.allCategories();
      }
    });
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
