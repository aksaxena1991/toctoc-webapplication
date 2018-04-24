import {Component, ChangeDetectionStrategy, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {IOption} from 'ng-select';
import {url} from '../../../../expoters/url';
import {Ng2FileInputService, Ng2FileInputAction} from 'ng2-file-input';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {SelectOptionService} from '../../../../../modules/admin/shared/element/select-option.service';

import {Http, Headers, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './add-category.component.css',
    '../../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  baseURL = url;
  myForm: FormGroup;
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: 'About Your Self'
  };
  public events;
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';
  constructor(private ng2FileInputService: Ng2FileInputService, public selectOptionService: SelectOptionService, public http: Http) {

    const category_name = new FormControl('', Validators.required);
    const parent_category_id = new FormControl('', Validators.required);
    const category_description = new FormControl('', Validators.required);
    const store_id = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      category_name: category_name,
      parent_category_id: parent_category_id,
      category_description: category_description,
      store_id: store_id
    });
    /*Basic validation end*/
  }

  ngOnInit() {

    setTimeout(() => {
      this.editorContent = this.editorContent;
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    /*console.log('quill is ready! this is current quill instance object', quill);*/
  }

  onContentChanged({quill, html, text}) {
    /*console.log('quill content is changed!', quill, html, text);*/
  }

  ngOnDestroy() {

  }

  public onAction(event: any) {

    this.events = event;
  }

  public onAdded(event: any) {
    console.log(event.id);
  }

  public onRemoved(event: any) {
    console.log(event.id);
  }

  public onSubmit() {
    console.log(this.events);
    const formData = new FormData();
    console.log(this.myForm['_value']);
    formData.append('category_image', this.events.file);
    formData.append('category_name', this.myForm['_value'].category_name);
    formData.append('parent_category_id', this.myForm['_value'].parent_category_id);
    formData.append('category_description', this.myForm['_value'].category_description);
    formData.append('store_id', this.myForm['_value'].store_id);
    // this.myForm['_value'].category_image = this.events.file;
    // console.log(this.events.currentFiles[0]);
    // console.log(this.myForm['_value']);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post(this.baseURL + 'categories/addCategory', formData).subscribe( (obj) => {
      // console.log(obj);
    });
  }
  private getFileNames(files: File[]): string {
     const names = files.map(file => file.name);
     console.log(names);
    return names ? names.join(', ') : 'No files currently added.';
  }

}
