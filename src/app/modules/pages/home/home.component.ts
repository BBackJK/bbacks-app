import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { addZeroString, initCalendarObject } from '@shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  years: number = initCalendarObject.getYears();
  months: number | string = addZeroString(initCalendarObject.getMonths());
  dates: number | string = addZeroString(initCalendarObject.getDates());

  days: string = initCalendarObject.dayList[initCalendarObject.getDays()];

  minutes: number | string = addZeroString(initCalendarObject.getMinutes());
  hours: number | string = addZeroString(initCalendarObject.getHours());
  seconds: number | string = addZeroString(initCalendarObject.getSeconds());

  constructor() {}

  ngOnInit(): void {
    this.setTime();
  }

  setTime(): void {
    const $this = this;

    setInterval(function() {

      let now = new Date();

      $this.years = initCalendarObject.getYears(now);
      $this.months = addZeroString(initCalendarObject.getMonths(now));
      $this.dates = addZeroString(initCalendarObject.getDates(now));
      $this.days = initCalendarObject.dayList[initCalendarObject.getDays(now)];
      $this.minutes = addZeroString(initCalendarObject.getMinutes(now));
      $this.hours = addZeroString(initCalendarObject.getHours(now));
      $this.seconds = addZeroString(initCalendarObject.getSeconds(now));

      now = null;
    }, 1000);
  }
}
