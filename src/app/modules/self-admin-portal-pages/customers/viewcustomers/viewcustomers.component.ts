import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '_services/customer.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.scss']
})
export class ViewcustomersComponent implements OnInit {

  customers: any = [];
  selectedId: number;
  searchText : any;
  

  viewaccounts = false;

  constructor(
    private router: Router, 
    private http: HttpClient,
    private toastr: ToastrService,
     private service: CustomerService,
     public dialogRef: MatDialogRef<ViewcustomersComponent>,
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
    acttype: new FormControl(''),
    currency: new FormControl(''),
    rr: new FormControl(''),
    rt: new FormControl(''),
    rc: new FormControl(''),
    rb: new FormControl(''),
    rd: new FormControl('')
  });
  exportexcel(): void
  {
    const rows = [...this.customers];
    this.service.buildCustomersExcel("Customers", rows).then((val) => {
      this.toastr.info("Excel Downloading ..");
    });

  }

  ngOnInit(): void {

    this.getCustomers();


  }

  getCustomers() {
    this.service.getAllCustomerAccounts()
      .subscribe(data => {
        this.customers = data;

      });
  }
 

}
