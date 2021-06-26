import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WisatadetailsComponent } from '../wisatadetails/wisatadetails.component';

@Component({
  selector: 'app-addpaket',
  templateUrl: './addpaket.component.html',
  styleUrls: ['./addpaket.component.scss']
})
export class AddpaketComponent implements OnInit {
  title:any;
  tripapp:any={};
  tripapps:any=[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
 //Membuat fungsi loading:
 loading!: boolean;

 //Membuat Fungsi Buat Produk
 buatProduk(data: any,idx: number) 
 {
  let dialog=  this.dialog.open(WisatadetailsComponent, {
     width: '450px',
     data:data
   });

   dialog.afterClosed().subscribe(res=>{
    if(res)
    {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if(idx==-1)this.tripapps.push(res);
      //jika tidak maka perbarui data
      else this.tripapps[idx]=data;
      }
  })

}
}
