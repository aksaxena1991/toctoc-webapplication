import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {url} from '../../../../expoters/url';
@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  baseUrl = url;
  public data;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';

  constructor(public http: Http) {
    this.allRoles();
  }
  allRoles() {
    this.http.get(this.baseUrl + 'roles/allRoles').subscribe( roles => {
      this.data = JSON.parse(roles['_body']).data;
    });
  }
  ngOnInit() {
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    console.log(a);
    // return a.city.length;
  }
}
