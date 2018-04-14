import {Component, ChangeDetectionStrategy, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {SelectOptionService} from '../../../../../modules/admin/shared/element/select-option.service';

import {Http, Response} from '@angular/http';
import {FileUploader} from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './edit-product.component.css',
    '../../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class EditProductComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: 'About Your Self'
  };
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';

  characters: Array<IOption>;

  selectedCharacter = '3';
  timeLeft = 5;

  countries: Array<IOption> = this.selectOptionService.getCountries();
  selectedCountry = 'IN';
  selectedCountries: Array<string> = ['IN', 'BE', 'LU', 'NL'];

  private dataSub: Subscription = null;

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  constructor(public selectOptionService: SelectOptionService, public http: Http) {

    const productName = new FormControl('', Validators.required);
    const productPrice = new FormControl('', Validators.required);
    const categoryId = new FormControl('', Validators.required);
    const productImage = new FormControl('', Validators.required);
    const productDescription = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      productName: productName,
      productPrice: productPrice,
      categoryId: categoryId,
      productDescription: productDescription,
      productImage: productImage
    });
    /*Basic validation end*/
  }
  ngOnInit() {
    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });

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

  onContentChanged({ quill, html, text }) {
    /*console.log('quill content is changed!', quill, html, text);*/
  }

  ngOnDestroy() {
    if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

}
