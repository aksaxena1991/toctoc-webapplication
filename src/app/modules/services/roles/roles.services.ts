import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {baseUrl} from '../../expoters/url';
@Injectable()
export class RolesService {

  private baseUrl = baseUrl;

  constructor(private http: Http) { }
  getAllRoles() {
    return this.http.get(this.baseUrl + 'roles/allRoles');
  }
  addRole(obj: any) {
    this.http.post(this.baseUrl + 'roles/addRole', {role_name: obj.role_name});
  }
}
