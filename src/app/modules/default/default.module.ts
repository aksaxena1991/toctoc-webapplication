import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {defaultRoutes} from './default-routing.module';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(defaultRoutes),
  ],
  providers: [
  ]
})
export class DefaultModule { }
