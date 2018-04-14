import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {HttpModule} from '@angular/http';
import {SelectModule} from 'ng-select';
import {SelectOptionService} from '../../../admin/shared/element/select-option.service';
import {TagInputModule} from 'ngx-chips';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
export const ProductsRoutes: Routes = [{
  path: '',

  children: [
    {
      path: 'view', component: ViewProductComponent
    },
    {
      path: 'edit', component: EditProductComponent
    },
    {
      path: 'add', component: AddProductComponent
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SelectModule,
    TagInputModule,
    DataTableModule,
    RouterModule.forChild(ProductsRoutes),
    SharedModule
  ],
  providers: [SelectOptionService],
  declarations: [ViewProductComponent, EditProductComponent, AddProductComponent]
})
export class ProductsModule { }
