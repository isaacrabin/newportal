
import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monthlycheckbook',
  templateUrl: './monthlycheckbook.component.html',
  styleUrls: ['./monthlycheckbook.component.scss']
})
export class MonthlycheckbookComponent implements OnInit {

   //Filter
   //Filter
   range = new FormGroup({
    month: new FormControl(''),

  });
  
  constructor(
    public dialogRef: MatDialogRef<MonthlycheckbookComponent>,
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
