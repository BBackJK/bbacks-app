import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { DiaryModule } from './diary/diary.module';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  imports: [],
  exports: [ HomeModule, DiaryModule, CalendarModule ],
  declarations: []
})
export class PagesModule {}
