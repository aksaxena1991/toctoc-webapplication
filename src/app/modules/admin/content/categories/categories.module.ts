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
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FileUploadModule} from 'ng2-file-upload';
import {DataFilterPipe} from '../../../pipes/data-filter.pipe';
const CategoryRoutes: Routes = [{
  path: '',

  children: [
    {
      path: 'view', component: ViewCategoryComponent
    },
    {
      path: 'edit/:id', component: EditCategoryComponent
    },
    {
      path: 'add', component: AddCategoryComponent
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
    RouterModule.forChild(CategoryRoutes),
    SharedModule,
    QuillEditorModule,
    FileUploadModule
  ],
  providers: [SelectOptionService],
  declarations: [ViewCategoryComponent, EditCategoryComponent, AddCategoryComponent, DataFilterPipe]
})
export class CategoriesModule { }
