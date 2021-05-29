import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open: boolean = true;

  constructor() {}

  test: FormControl = new FormControl('');

  ngOnInit(): void {
    console.log('home');
  }

  onTest():void {
    console.log('click');
    console.log(this.test.value);
  }

  closeTest(): void {
    console.log(1);
  }

  onClick():void {
    this.open = !this.open;
  }
}