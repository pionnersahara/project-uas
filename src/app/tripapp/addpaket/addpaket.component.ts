import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WisatadetailsComponent } from '../wisatadetails/wisatadetails.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpaket',
  templateUrl: './addpaket.component.html',
  styleUrls: ['./addpaket.component.scss']
})
export class AddpaketComponent implements OnInit {
  trip:any={};
  trips:any=[];
  userData: any = {};
  idx : any;

  constructor(
    public dialog: MatDialog,
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit(){
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getTrip();
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

  getTrip(){
    this.afs.collection('trips', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({idField: 'id'}).subscribe(res => {
      console.log(res);
      this.trips = res;
    }, err => {
      console.log(err)
    } )
  }

 //Membuat Fungsi Buat Produk
 detailWisata(data: any,idx: any) 
 {
  let dialog=  this.dialog.open(WisatadetailsComponent, {
     width: '450px',
     data:data
   });

   dialog.afterClosed().subscribe(res=>{
    if(res)
    {
      //jika idx=-1 (penambahan data baru) maka tambahkan data
      if(idx==-1)this.trips.push(res);
      //jika tidak maka perbarui data
      else this.trips[idx]=data;
      }
  })
  }


  deleteProduct(trips: any, idx: any) {
    var conf = confirm('Delete item?');
    if (conf) {
      this.afs.collection('trips').doc(trips.id).delete()
      .then(res =>{
        this.openSnackBar("Data berhasil dihapus", "ok");
      }).catch(err => {
        this.openSnackBar("Silahkan coba lagi, Data tidak dapat dihapus", "ok");
      })
    }
  }
}