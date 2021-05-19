import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { InputCheckboxComponent, InputRadioComponent, InputTextComponent } from './input';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  exports: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
    , TextComponent
  ],
  declarations: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
    , TextComponent
  ]
})
export class ComponentsModule {}
