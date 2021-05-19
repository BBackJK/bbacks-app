import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  
  @Input() isBlank: boolean = false;
  @Input() link: string;

  constructor() {}

  ngOnInit(): void {
    console.log(1);
  }
}