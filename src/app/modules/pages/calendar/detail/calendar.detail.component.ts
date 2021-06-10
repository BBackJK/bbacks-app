import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar.detail.component.html',
  styleUrls: ['./calendar.detail.component.scss']
})
export class CalendarDetailComponent implements OnInit {

  @Input()
  selectDate: number;

  @Output() event = new EventEmitter();

  date: number;

  constructor() {}

  ngOnInit(): void {
    this.setInitDate();
  }

  setInitDate(): void {
    this.date = this.selectDate;
  }

  closeDetail(): void {
    this.event.emit();
  }
}
