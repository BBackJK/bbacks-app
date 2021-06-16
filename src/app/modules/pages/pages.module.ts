import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { DiaryModule } from './diary/diary.module';
import { CalendarModule } from './calendar/calendar.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
@NgModule({
  imports: [],
  exports: [ 
    HomeModule
    , DiaryModule
    , CalendarModule
    , LoginModule
    , RegisterModule
  ],
  declarations: []
})
export class PagesModule {}
