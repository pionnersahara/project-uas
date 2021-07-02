

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripappComponent } from './tripapp/tripapp.component';
import { WisatadetailsComponent } from './wisatadetails/wisatadetails.component';
import { AddpaketComponent } from './addpaket/addpaket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from 'src/Material/material';
import { FormsModule } from '@angular/forms';

const routes:Routes =[
  {
    path: '',
    component: TripappComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'addpaket',
        component: AddpaketComponent
      },
      {
        path:'wisatadetail',
        component:WisatadetailsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    TripappComponent,
    WisatadetailsComponent,
    AddpaketComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TripappModule { }
