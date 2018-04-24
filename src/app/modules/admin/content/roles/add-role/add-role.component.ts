import {Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {url} from '../../../../expoters/url';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  baseUrl = url;

  constructor( private http: Http) {
    const role_name = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      role_name: role_name
    });
  }

  onSubmit() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl + 'roles/addRole',
      this.myForm['_value'], options).subscribe((data) => {
      if (data.status === 200) {
        this.myForm.reset();
      }
    });
  }

  ngOnInit() {
  }
}
