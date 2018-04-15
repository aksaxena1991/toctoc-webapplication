import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegistrationComponent]
})
export class AuthModule { }
