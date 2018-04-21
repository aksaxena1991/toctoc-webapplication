import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  title = 'Default';
}
