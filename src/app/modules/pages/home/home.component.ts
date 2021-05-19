import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  test: FormControl = new FormControl('');

  ngOnInit(): void {
    console.log('home');
  }

  onTest():void {
    console.log('click');
    console.log(this.test.value);
  }
}