import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit() {
    console.log(this._authService.getLogin({reg_username: 'aksaxena1991', reg_password: '12345'}));
  }

}
