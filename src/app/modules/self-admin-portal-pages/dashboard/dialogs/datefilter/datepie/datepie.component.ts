import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datepie',
  templateUrl: './datepie.component.html',
  styleUrls: ['./datepie.component.scss']
})
export class DatepieComponent implements OnInit {

   //Filter
   range = new FormGroup({
    start: new FormControl(new Date().toISOString()),
    end: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<DatepieComponent>,
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
