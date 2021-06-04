import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { CalendarModule } from './calendar/calendar.module';
import { DiaryModule } from './diary/diary.module';

@NgModule({
  imports: [],
  exports: [ HomeModule, CalendarModule, DiaryModule ],
  declarations: []
})
export class PagesModule {}
