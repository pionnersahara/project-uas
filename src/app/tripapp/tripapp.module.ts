import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripappComponent } from './tripapp/tripapp.component';
import { WisatadetailsComponent } from './wisatadetails/wisatadetails.component';
import { AddpaketComponent } from './addpaket/addpaket.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    TripappComponent,
    WisatadetailsComponent,
    AddpaketComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TripappModule { }
