import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { DiaryModule } from './diary/diary.module';
import { CalendarDetailModule , CalendarModule } from './calendar';

@NgModule({
  imports: [],
  exports: [ HomeModule, CalendarModule, DiaryModule, CalendarDetailModule ],
  declarations: []
})
export class PagesModule {}
