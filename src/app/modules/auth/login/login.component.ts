import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public _authService: AuthService, public _router: Router) {
    const reg_username = new FormControl('', Validators.required);
    const reg_password = new FormControl('', Validators.required);
    this.loginForm = new FormGroup({
      reg_username: reg_username,
      reg_password: reg_password
    });
  }
  ngOnInit() {
    console.log();
  }
  loginWithEmailAndPassword() {
    let creds: any  =  {reg_username: this.loginForm.value.reg_username, reg_password: this.loginForm.value.reg_password};
    this._authService.getLogin(creds).subscribe(success => {
      if(success.status === 200)
      {
        sessionStorage.setItem('token', JSON.parse(success['_body']).token);
        this._router.navigate(['/dashboard']);
      }
      return false;
    });
  }

}
