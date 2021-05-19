import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '@shared/index';

@NgModule({
  imports: [ ComponentsModule ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class HomeModule {} 
