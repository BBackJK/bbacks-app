import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { InputCheckboxComponent, InputRadioComponent, InputTextComponent } from './input';
import { TextComponent } from './text/text.component';
import { ShadowCoverComponent } from './cover/shadow.cover.component';
import { ModalSearchComponent } from './modal';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  exports: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
    , TextComponent
    , ShadowCoverComponent
    , ModalSearchComponent
  ],
  declarations: [
    ButtonComponent
    , LinkComponent
    , InputCheckboxComponent
    , InputRadioComponent
    , InputTextComponent
    , TextComponent
    , ShadowCoverComponent
    , ModalSearchComponent
  ]
})
export class ComponentsModule {}
