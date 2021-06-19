import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './auth/cover/cover.component';
import { CorauselComponent } from './corausel/corausel.component';


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
    path: 'corausel',
    component:CorauselComponent
  },


  {
    path: '',
    pathMatch:'full',
    redirectTo:'/cover'
  },

    {
      path: 'tripapp',
      loadChildren:()=>import('./tripapp/tripapp.module').then(mod=>mod.TripappModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }