import { addZeroString } from "./date.util";

export const initCalendarObject = {
  monList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  dayList: ['일', '월', '화', '수', '목', '금', '토'],
  today: new Date(),
  activeDate: new Date(),
  getFirstDay: (yy, mm) => new Date(yy, mm, 1),
  getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
  nextMonth: function() {
    let date = new Date();
    let nextMonth = new Date().getMonth();

    date.setDate(1);
    date.setMonth(++nextMonth);

    this.activeDate = date;
    return date;
  },
  prevMonth: function() {
    let date = new Date();
    let prevMonth = new Date().getMonth();

    date.setDate(1);
    date.setMonth(--prevMonth);

    this.activeDate = date;
    return date;
  },
  addZero: addZeroString,
}

export function getDateFirstAndLast(fullDate: Date): Date[] {

  let yy = fullDate.getFullYear();
  let mm = fullDate.getMonth();

  let firstDay = initCalendarObject.getFirstDay(yy, mm);
  let lastDay = initCalendarObject.getLastDay(yy, mm);

  return [firstDay, lastDay];
}