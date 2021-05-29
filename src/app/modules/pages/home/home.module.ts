import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ComponentsModule, DirectivesModule } from '@shared/index';

@NgModule({
  imports: [ ComponentsModule, DirectivesModule, CommonModule ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class HomeModule {} 
