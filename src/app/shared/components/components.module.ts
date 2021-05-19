import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { InputCheckboxComponent, InputRadioComponent, InputTextComponent } from './input';


@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
  ],
  declarations: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
  ]
})
export class ComponentsModule {}
