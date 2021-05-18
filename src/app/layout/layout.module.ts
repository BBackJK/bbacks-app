import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@modules/app-routing.module';

import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [ AppRoutingModule ],
  exports: [ ContentsComponent ],
  declarations: [ ContentsComponent ]
})
export class LayoutModule {} 
