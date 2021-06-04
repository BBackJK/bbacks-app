import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@modules/app-routing.module';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ AppRoutingModule ],
  exports: [ ContentComponent, HeaderComponent ],
  declarations: [ ContentComponent, HeaderComponent ]
})
export class LayoutModule {} 
