import { MatSnackBar } from '@angular/material/snack-bar';

import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/firestore';

import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wisatadetails',
  templateUrl: './wisatadetails.component.html',
  styleUrls: ['./wisatadetails.component.scss'],
})
export class WisatadetailsComponent implements OnInit {
  userData: any = {};

  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<WisatadetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((res) => {
      this.userData = res;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action);
  }

  simpan() {
    if (this.data.id == undefined) {
      // fungsi untuk menyimpan data
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;

      this.afs
        .collection('trips')
        .doc(doc)
        .set(this.data)
        .then((res) => {
          this.openSnackBar('Selamat data anda berhasil disimpan!', 'ok');
          this.dialogRef.close();
        })
        .catch((err) => {
          this.openSnackBar('Data tidak berhasil disimpan', 'ok');
          console.log(err);
        });
    } else {
      // fungsi untuk menyimpan data
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;

      this.afs
        .collection('trips')
        .doc(this.data.id)
        .update(this.data)
        .then((res) => {
          this.openSnackBar('Selamat data anda berhasil diupdate!', 'ok');
          this.dialogRef.close();
        })
        .catch((err) => {
          console.log(err);
          this.openSnackBar('Maaf anda tidak dapat menyimpan data', 'ok');
        });
    }
  }
}
