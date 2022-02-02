import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AsideComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class ShareModule { }
