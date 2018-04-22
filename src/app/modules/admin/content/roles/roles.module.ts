import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import {SelectModule} from 'ng-select';
import {SelectOptionService} from '../../../admin/shared/element/select-option.service';
import {TagInputModule} from 'ngx-chips';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import {FileUploadModule} from 'ng2-file-upload';
import { RolesService} from '../../../services/roles/roles.services';
export const RolesRoutes: Routes = [{
  path: '',

  children: [
    {
      path: 'view', component: ViewRoleComponent
    },
    {
      path: 'edit', component: EditRoleComponent
    },
    {
      path: 'add', component: AddRoleComponent
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    TagInputModule,
    DataTableModule,
    RouterModule.forChild(RolesRoutes),
    SharedModule,
    QuillEditorModule,
    FileUploadModule
  ],
  providers: [SelectOptionService, RolesService],
  declarations: [AddRoleComponent, EditRoleComponent, ViewRoleComponent]
})
export class RolesModule { }
