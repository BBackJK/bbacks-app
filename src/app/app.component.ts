import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  openBox: string = '';

  constructor() {}

  closeSidebar(event): void {
    this.openBox = '';
  }

  openSidebar(event): void {
    this.openBox = 'sidebar';
  }

  openSearch(event): void {
    this.openBox = 'search';
  }

  closeSearch(event): void {
    this.openBox = '';
  }
}
