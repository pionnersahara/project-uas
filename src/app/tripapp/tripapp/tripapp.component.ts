import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tripapp',
  templateUrl: './tripapp.component.html',
  styleUrls: ['./tripapp.component.scss']
})
export class TripappComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  mode:string='side';
 //LogOut

  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/tripapp/addpaket',
    },

    {
      name:'Edit Image',
      icon:'camera_enchance',
      url:'/tripnapp/addpaket',
    },
    
    {
      group:'Menu Group',
      children:[
        {
          name:'Image Gallery',
          icon:'images',
          url:'/tripapp/gallery'
        }

      ]
    }
  ];

}
