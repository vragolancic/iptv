import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    SecureComponent
  ],
  exports: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class SecureModule { }
