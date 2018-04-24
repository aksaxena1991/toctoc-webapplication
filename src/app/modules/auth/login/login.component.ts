import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {url} from '../../expoters/url';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  baseUrl = url;
  constructor(public http: Http, public _router: Router) {
    const reg_username = new FormControl('', Validators.required);
    const reg_password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      reg_username: reg_username,
      reg_password: reg_password
    });
  }
  ngOnInit() {
  }
  loginWithEmailAndPassword() {
    const creds  =  {reg_username: this.loginForm.value.reg_username, reg_password: this.loginForm.value.reg_password};
    this.http.get(this.baseUrl + 'auth/login', creds).subscribe( data => {
      if (data.status === 200) {
        sessionStorage.setItem('token', JSON.parse(data['_body']).token);
        this._router.navigate(['/dashboard']);
      } else {
        this._router.navigate(['/auth/login']);
      }
    });
}

}
