import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderedDebitService } from '_services/ordered-debit.service';

@Component({
  selector: 'app-viewcards',
  templateUrl: './viewcards.component.html',
  styleUrls: ['./viewcards.component.scss']
})
export class ViewcardsComponent implements OnInit {

  cards : any = [];
  selectedId: number;
  searchText : any;
 

  constructor(
    private router: Router, 
    private http : HttpClient,
    private service: OrderedDebitService,
    public dialogRef: MatDialogRef<ViewcardsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private toastr: ToastrService
    ) { }
  exportexcel(): void
  {
    const rows = [...this.cards];
    this.service.buildCardExcel("Ordered Cards", rows).then((val) => {
      this.toastr.info("Excel Downloading ..");
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  viewDetails = new FormGroup({
    actid: new FormControl(''),
    actname: new FormControl(''),
    actno: new FormControl(''),
    fname: new FormControl(''),
    sname: new FormControl(''),
    pub: new FormControl(''),
    ct: new FormControl('')

  });

  ngOnInit(): void {
    
    
  }

}
