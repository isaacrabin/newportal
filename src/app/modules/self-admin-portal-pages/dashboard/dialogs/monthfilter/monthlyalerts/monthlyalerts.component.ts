import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monthlyalerts',
  templateUrl: './monthlyalerts.component.html',
  styleUrls: ['./monthlyalerts.component.scss']
})
export class MonthlyalertsComponent implements OnInit {

   //Filter
   //Filter
   range = new FormGroup({
    month: new FormControl(''),

  });
  
  constructor(
    public dialogRef: MatDialogRef<MonthlyalertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.range.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.range.value);
  }

}
