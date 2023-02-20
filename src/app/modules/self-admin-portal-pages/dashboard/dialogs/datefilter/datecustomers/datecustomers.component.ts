import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-datecustomers',
  templateUrl: './datecustomers.component.html',
  styleUrls: ['./datecustomers.component.scss']
})
export class DatecustomersComponent implements OnInit {

   //Filter
   range = new FormGroup({
    start: new FormControl(new Date().toISOString()),
    end: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<DatecustomersComponent>,
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
