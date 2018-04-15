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
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { EditCouponComponent } from './edit-coupon/edit-coupon.component';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FileUploadModule} from 'ng2-file-upload';
export const ProductsRoutes: Routes = [{
  path: '',

  children: [
    {
      path: 'view', component: ViewCouponComponent
    },
    {
      path: 'edit', component: EditCouponComponent
    },
    {
      path: 'add', component: AddCouponComponent
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
    SharedModule,
    QuillEditorModule,
    FileUploadModule
  ],
  providers: [SelectOptionService],
  declarations: [ViewCouponComponent, EditCouponComponent, AddCouponComponent]
})
export class CouponsModule { }
