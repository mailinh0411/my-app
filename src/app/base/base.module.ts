import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from './component/my-input/my-input.component';
import { MySelectComponent } from './component/my-select/my-select.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyInputComponent,
    MySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyInputComponent,
    MySelectComponent
  ]
})
export class BaseModule { }
