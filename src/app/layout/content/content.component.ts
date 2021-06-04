import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: '<section><router-outlet></router-outlet></section>',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
}