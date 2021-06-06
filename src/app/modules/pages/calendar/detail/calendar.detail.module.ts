import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from '../calendar.routing.module';
import { CalendarDetailComponent } from './calendar.detail.component';

@NgModule({
  imports: [ CommonModule, CalendarRoutingModule ],
  exports : [ CalendarDetailComponent ],
  declarations: [ CalendarDetailComponent ]
})
export class CalendarDetailModule {}
