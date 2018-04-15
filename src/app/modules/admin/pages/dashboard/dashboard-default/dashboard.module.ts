import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const DashboardEcommerceRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Ecommerce',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardEcommerceRoutes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
