import {Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
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

  constructor(private _roleService: RolesService, private http: Http) {

    const role_name = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      role_name: role_name
    });
    /*Basic validation end*/
  }
  onSubmit() {
    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );
    // headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    const options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3000/api/roles/addRole',
      this.myForm['_value'], options).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
