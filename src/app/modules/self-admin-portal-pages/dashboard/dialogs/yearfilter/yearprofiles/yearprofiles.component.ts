import { Component, OnInit ,Inject,Output,Input,EventEmitter,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { YearpickerDateAdapter } from '../../yearpickeradapter/yearpickeradapter.module';

@Component({
  selector: 'app-yearprofiles',
  templateUrl: './yearprofiles.component.html',
  styleUrls: ['./yearprofiles.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: YearpickerDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform],
    },
  ],
})
export class YearprofilesComponent implements OnInit {

   //Filter
   range = new FormGroup({
    year: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<YearprofilesComponent>,
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
