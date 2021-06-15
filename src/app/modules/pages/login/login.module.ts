import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ 
    CommonModule
    , ComponentsModule
  ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}
