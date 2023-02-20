import { Component, OnInit ,Inject,Output,Input,EventEmitter,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-yearpie',
  templateUrl: './yearpie.component.html',
  styleUrls: ['./yearpie.component.scss']
})
export class YearpieComponent implements OnInit {

   //Filter
   range = new FormGroup({
    year: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    public dialogRef: MatDialogRef<YearpieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.range.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.range.value);
  }
  @Input()
  public Year: Date | null = null;

  @Output()
  public monthAndYearChange = new EventEmitter<Date | null>();

  public emitDateChange(event: MatDatepickerInputEvent<Date | null, unknown>): void {
    this.monthAndYearChange.emit(event.value);
  }
  public yearChanged(value: any, widget: any): void {
    this.Year = value;
    widget.close();
  }


}
