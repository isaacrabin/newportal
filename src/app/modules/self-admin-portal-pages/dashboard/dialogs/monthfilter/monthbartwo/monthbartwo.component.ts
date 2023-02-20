
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component,OnInit ,Inject, Input } from '@angular/core';


@Component({
  selector: 'app-monthbartwo',
  templateUrl: './monthbartwo.component.html',
  styleUrls: ['./monthbartwo.component.scss'],
  
})
export class MonthbartwoComponent implements OnInit {

   //Filter
   range = new FormGroup({
    month: new FormControl(''),

  });
  
  constructor(
    public dialogRef: MatDialogRef<MonthbartwoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    console.log(this.range.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.range.value);
  }
  

}
