import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dateprofiles',
  templateUrl: './dateprofiles.component.html',
  styleUrls: ['./dateprofiles.component.scss']
})
export class DateprofilesComponent implements OnInit {

   //Filter
  //  range = new FormGroup({
  //   start: new FormControl(new Date().toISOString()),
  //   end: new FormControl(new Date().toISOString()),
  // });
  range = new FormGroup({
    startyear: new FormControl(''),
    startmonth: new FormControl(''),
    startdate: new FormControl(''),
    endyear: new FormControl(''),
    endmonth: new FormControl(''),
    enddate: new FormControl(''),
    
  })
  constructor(
    public dialogRef: MatDialogRef<DateprofilesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    console.log(this.range.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
