import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tripapp',
  templateUrl: './tripapp.component.html',
  styleUrls: ['./tripapp.component.scss']
})
export class TripappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mode:string='side';
 //LogOut
 logout()
 {
   let conf=confirm('Apakah anda ingin keluar dari aplikasi ini?');
   if (conf)
   {
     localStorage.removeItem('appToken');
     window.location.reload();
   }
 }
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
