import { NgModule } from '@angular/core';

import { DirectivesModule } from '@shared/directives/directive.module';
import { AppRoutingModule } from '@modules/app-routing.module';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [ AppRoutingModule, DirectivesModule ],
  exports: [ ContentComponent, HeaderComponent, SidebarComponent ],
  declarations: [ ContentComponent, HeaderComponent, SidebarComponent ]
})
export class LayoutModule {} 
