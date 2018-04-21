import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { RolesService } from '../../../../services/roles/roles.services';
@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public http: Http, public _roles: RolesService) {
    this.allRoles();
  }
  allRoles() {
    this._roles.getAllRoles().subscribe( roles => {
      this.data = JSON.parse(roles['_body']).data;
    });
  }
  ngOnInit() {
  }

}
