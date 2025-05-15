import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    HeaderComponent 
  ]
})
export class SharedModule { }
