import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {IOption} from 'ng-select';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {SelectOptionService} from '../../../../../modules/admin/shared/element/select-option.service';

import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: [
    './edit-product.component.css',
    '../../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class EditProductComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  mynumberForm: FormGroup;
  mytooltipForm: FormGroup;
  checkdropForm: FormGroup;
  submitted: boolean;

  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: "About Your Self"
  };

  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  countries: Array<IOption> = this.selectOptionService.getCountries();
  selectedCountry = 'IN';
  selectedCountries: Array<string> = ['IN', 'BE', 'LU', 'NL'];

  private dataSub: Subscription = null;

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  autocompleteItemsAsObjects = [
    {value: 'Alabama', id: 0},
    {value: 'Wyoming', id: 1},
    {value: 'Coming', id: 2},
    {value: 'Josephin Doe', id: 3},
    {value: 'Henry Die', id: 4},
    {value: 'Lary Doe', id: 5},
    {value: 'Alice', id: 6},
    {value: 'Alia', id: 7},
    {value: 'Suzen', id: 8},
    {value: 'Michael Scofield', id: 9},
    {value: 'Irina Shayk', id: 10},
    {value: 'Sara Tancredi', id: 11},
    {value: 'Daizy Mendize', id: 12},
    {value: 'Loren Scofield', id: 13},
    {value: 'Shayk', id: 14},
    {value: 'Sara', id: 15},
    {value: 'Doe', id: 16},
    {value: 'Lary', id: 17},
    {value: 'Roni Sommerfield', id: 18},
    {value: 'Mickey Amavisca', id: 19},
    {value: 'Dorethea Hennigan', id: 20},
    {value: 'Marisha Haughey', id: 21},
    {value: 'Justin Czajkowski', id: 22},
    {value: 'Reyes Hodges', id: 23},
    {value: 'Vicky Hadley', id: 24},
    {value: 'Lezlie Baumert', id: 25},
    {value: 'Otha Vanorden', id: 26},
    {value: 'Glayds Inabinet', id: 27},
    {value: 'Hang Owsley', id: 28},
    {value: 'Carlotta Buttner', id: 29},
    {value: 'Randa Vanloan', id: 30},
    {value: 'Elana Fulk', id: 31},
    {value: 'Amos Spearman', id: 32},
    {value: 'Samon', id: 33},
    {value: 'John Doe', id:  34}
  ];
  constructor(public selectOptionService: SelectOptionService, public http: Http) {

    const name = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);
    const gender = new FormControl('', Validators.required);
    const email = new FormControl('', [Validators.required, Validators.email]);

    const rpassword = new FormControl('', [Validators.required, CustomValidators.equalTo(password)]);
    this.myForm = new FormGroup({
      name: name,
      email: email,
      password: password,
      rpassword: rpassword,
      gender: gender
    });
    /*Basic validation end*/

    /*number Validation start*/
    const integer = new FormControl('', [Validators.required, CustomValidators.digits]);
    const numeric = new FormControl('', [Validators.required, CustomValidators.number]);
    const greater = new FormControl('', [Validators.required, CustomValidators.gt(50)]);
    const less = new FormControl('', [Validators.required, CustomValidators.lt(50)]);

    this.mynumberForm = new FormGroup({
      integer: integer,
      numeric: numeric,
      greater: greater,
      less: less
    });
    /*number validation end*/

    /*Tooltip Validation Start*/
    const usernameP = new FormControl('', [Validators.required]);
    const EmailP = new FormControl('', [Validators.required, Validators.email]);
    this.mytooltipForm = new FormGroup({
      usernameP: usernameP,
      EmailP: EmailP,
    });
    /*Tooltip Validation End*/

    /* component form */
    const area = new FormControl('', [Validators.required]);
    const job = new FormControl('', [Validators.required]);
    this.checkdropForm = new FormGroup({
      area: area,
      job: job,
    });
    /* end component form */
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

  public requestAutocompleteItems = (text: string): Observable<Response> => {
    const url = `https://api.github.com/search/repositories?q=${text}`;
    return this.http
      .get(url)
      .map(data => data.json().items.map(item => item.full_name));
  }
}
