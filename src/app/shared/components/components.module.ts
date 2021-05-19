import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    ButtonComponent
    , LinkComponent
  ],
  declarations: [
    ButtonComponent
    , LinkComponent
  ]
})
export class ComponentsModule {}
