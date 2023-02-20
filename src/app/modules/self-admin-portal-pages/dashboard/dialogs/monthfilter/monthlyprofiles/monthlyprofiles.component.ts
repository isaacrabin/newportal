import { Component, OnInit ,Inject,Output,Input,EventEmitter,} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MonthpickerDateAdapter } from '../../monthpickeradapter/monthpickeradapter.module';



@Component({
  selector: 'app-monthlyprofiles',
  templateUrl: './monthlyprofiles.component.html',
  styleUrls: ['./monthlyprofiles.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MonthpickerDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform],
    },
  ],
})
export class MonthlyprofilesComponent implements OnInit {

   //Filter
   range = new FormGroup({
    month: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<MonthlyprofilesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  
    ngOnInit(): void {
        
    }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.range.value);
  }
 

}
