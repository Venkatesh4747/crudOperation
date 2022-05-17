import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import {LogginInterceptor}from '../app/loggin.interceptor'
import { CommonInterceptor } from './common.interceptor';
import { GuardsGuard } from './guards/guards.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [GuardsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
