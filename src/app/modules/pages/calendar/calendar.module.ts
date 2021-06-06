import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar.routing.module';
import { CalendarComponent } from './calendar.component';
import { ComponentsModule } from '@shared/index';


@NgModule({
  imports: [ CommonModule, ComponentsModule, CalendarRoutingModule ],
  exports: [ CalendarComponent ],
  declarations: [ CalendarComponent ]
})
export class CalendarModule {}
