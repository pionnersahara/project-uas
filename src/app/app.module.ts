import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './auth/cover/cover.component';
import { MaterialDesign } from 'src/Material/material';

import { CorauselComponent } from './corausel/corausel.component';
import { HttpClientModule } from '@angular/common/http';
import { BoostrapMaterial } from 'src/Material/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoverComponent,
    CorauselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    HttpClientModule,
    BoostrapMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
