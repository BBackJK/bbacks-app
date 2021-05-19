import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { ComponentsModule, DirectivesModule } from '@shared/index';

@NgModule({
  imports: [ ComponentsModule, DirectivesModule ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class HomeModule {} 
