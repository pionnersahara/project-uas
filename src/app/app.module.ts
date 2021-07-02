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
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './shared/services/auth.service';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoverComponent,
    CorauselComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    BoostrapMaterial,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyA4XC_3DSRK1EB8wXH1zgJIHtJGF899fLU",
        authDomain: "proyek-uas-945a6.firebaseapp.com",
        projectId: "proyek-uas-945a6",
        storageBucket: "proyek-uas-945a6.appspot.com",
        messagingSenderId: "612166187414",
        appId: "1:612166187414:web:067b0b84c143bbfab5c5b7"
      }
    ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
