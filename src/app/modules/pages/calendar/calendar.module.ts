import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './calendar.component';
import { ComponentsModule } from '@shared/index';


@NgModule({
  imports: [ CommonModule, ComponentsModule ],
  exports: [ CalendarComponent ],
  declarations: [ CalendarComponent ]
})
export class CalendarModule {}
