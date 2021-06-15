import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './auth/cover/cover.component';
import { MaterialDesign } from 'src/Material/material';
import { AddpaketComponent } from './tripapp/addpaket/addpaket.component';
import { WisatadetailsComponent } from './tripapp/wisatadetails/wisatadetails.component';
import { DashboardComponent } from './tripapp/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoverComponent,
    AddpaketComponent,
    WisatadetailsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
