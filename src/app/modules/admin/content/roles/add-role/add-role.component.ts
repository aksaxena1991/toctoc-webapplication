import {Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RolesService } from '../../../../services/roles/roles.services';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './add-role.component.css',
    '../../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AddRoleComponent implements OnInit {
  myForm: FormGroup;
  constructor(private _roleService: RolesService) {

    const role_name = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      role_name: role_name
    });
    /*Basic validation end*/
  }
  onSubmit() {
    const response = this._roleService.addRole(this.myForm['_value']);
    console.log(response);
  }
  ngOnInit() {
  }

}
