import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { SecureComponent } from './secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../interceptors/token.interceptor";



@NgModule({
  declarations: [
    SecureComponent,
    DashboardComponent,
    UsersComponent,
    AsideComponent,
    HeaderComponent,
    ToolbarComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class SecureModule { }
