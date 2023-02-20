import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { CustomerService } from '_services/customer.service';
import { Customers } from '../interfaces';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  search : String ="";
  selectedId: any;
  totalItems = 0;
  data! : Customers [];
  // recentDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentDataSource;
  recentTableColumns: string[] = [
    
     'accountName',
    'accountNumber',
     'accountType', 
     'Currency',
     'edabled',
      'actions'
    ];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
     selectedRow;

  constructor(
    public dialog: MatDialog,
    private router: Router,
     private http: HttpClient,
    private toastr: ToastrService, 
     private service: CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers();
    this.gettotalItems();
  }
  gettotalItems() {
    this.service.getTotalNumberAvailable().subscribe((response: any) => {
      //console.log(response);
       this.totalItems = response;
    });
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewcustomersComponent,{
      data:{
        accountName: this.selectedRow.accountName,
        accountNumber: this.selectedRow.accountNumber,
        Currency: this.selectedRow.Currency,
        accountType: this.selectedRow.accountType,
        CreatedAt: this.selectedRow.CreatedAt,
        restrictionreason: this.selectedRow.restrictionreason,
        restrictionType: this.selectedRow.restrictionType,
        restrictionDate: this.selectedRow.restrictionDate,
        restrictionCode: this.selectedRow.restrictionCode,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  exportexcel(): void
  {
    const rows = [...this.recentDataSource];
    this.service.buildCustomersExcel("Secondary Accounts", rows).then((val) => {
       this.toastr.info("Excel Downloading ..");
    });

  }
  getCustomers() {
    this.service.getAllCustomerAccounts()
      .subscribe((results : any) => {
        this.toastr.success('Customers fetched successfully');
        this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
        console.log(results);
      });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }

}
