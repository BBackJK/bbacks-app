import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { DiaryModule } from './diary/diary.module';
import { CalendarModule } from './calendar/calendar.module';
import { LoginModule } from './login/login.module';
@NgModule({
  imports: [],
  exports: [ 
    HomeModule
    , DiaryModule
    , CalendarModule
    , LoginModule
  ],
  declarations: []
})
export class PagesModule {}
