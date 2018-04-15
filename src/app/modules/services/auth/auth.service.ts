import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class AuthService {

  private baseUrl = 'https://api-toctoc.herokuapp.com/api/';

  constructor(private http: Http) { }
  getLogin(creds: any) {
    return this.http.get(this.baseUrl + 'login', creds).subscribe(res => res.json());
  }

}
