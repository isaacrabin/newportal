import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monthlybar',
  templateUrl: './monthlybar.component.html',
  styleUrls: ['./monthlybar.component.scss']
})
export class MonthlybarComponent implements OnInit {

   //Filter
   //Filter
   range = new FormGroup({
    month: new FormControl(''),

  });
  
  constructor(
    public dialogRef: MatDialogRef<MonthlybarComponent>,
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
