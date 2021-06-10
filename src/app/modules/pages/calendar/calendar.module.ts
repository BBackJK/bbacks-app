import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule, DirectivesModule } from '@shared/index';

import { CalendarComponent } from './calendar.component';
import { CalendarDetailComponent } from './detail/calendar.detail.component';


@NgModule({
  imports: [ 
    CommonModule
    , ComponentsModule
    , DirectivesModule
  ],
  exports: [ CalendarComponent, CalendarDetailComponent ],
  declarations: [ CalendarComponent, CalendarDetailComponent ]
}) 
export class CalendarModule {}
