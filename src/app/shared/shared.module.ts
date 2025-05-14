import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    TextareaComponent,
  ]
})
export class SharedModule { }
