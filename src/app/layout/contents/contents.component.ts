import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  template: '<section><router-outlet></router-outlet></section>',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent {

  constructor() {
    console.log('contents constructor');
  }
}