import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderedCheckbookService } from '_services/ordered-checkbook.service';

@Component({
  selector: 'app-viewcheckbook',
  templateUrl: './viewcheckbook.component.html',
  styleUrls: ['./viewcheckbook.component.scss']
})
export class ViewcheckbookComponent implements OnInit {

  checkbooks : any = [];
  selectedId: number;
  searchText : any;


  constructor(
    private router: Router,
    private http : HttpClient,
    private service: OrderedCheckbookService,
    // private toastr: ToastrService
    public dialogRef: MatDialogRef<ViewcheckbookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  

  viewDetails = new FormGroup({
    custid: new FormControl(''),
    actid: new FormControl(''),
    actname: new FormControl(''),
    actno: new FormControl(''),
    pages: new FormControl(''),
    pub: new FormControl(''),
    ca: new FormControl('')

  });

  ngOnInit(): void {
    this.getCheckbooks();
    

 }
 getCheckbooks() {
   this.service.getAllCheckbook()
   .subscribe(data => {
     this.checkbooks = data;

   });
 }
 
 


}
