import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './auth/cover/cover.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'cover',
    component:CoverComponent
  },
  
  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  


  {
    path: '',
    pathMatch:'full',
    redirectTo:'/cover'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }