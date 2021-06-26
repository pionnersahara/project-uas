import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wisatadetails',
  templateUrl: './wisatadetails.component.html',
  styleUrls: ['./wisatadetails.component.scss']
})
export class WisatadetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WisatadetailsComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    this.dialogRef.close(this.data);
  }
}
