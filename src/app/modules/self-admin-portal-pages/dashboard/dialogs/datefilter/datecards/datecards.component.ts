import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datecards',
  templateUrl: './datecards.component.html',
  styleUrls: ['./datecards.component.scss']
})
export class DatecardsComponent implements OnInit {

   //Filter
   range = new FormGroup({
    start: new FormControl(new Date().toISOString()),
    end: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<DatecardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    console.log(this.range.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.range.value.start);
  }

}
