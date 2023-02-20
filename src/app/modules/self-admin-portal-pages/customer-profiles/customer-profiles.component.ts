
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Profiles } from 'app/shared/model/Profiles';
import { ProfileService } from '_services/profile.service';
import { ViewcustomersComponent } from '../customers/viewcustomers/viewcustomers.component';
import { SuccessfulComponent } from './messages/successful/successful.component';
import { ErrorComponent } from './messages/error/error.component';
import { MarkercheckerComponent } from './markerchecker/markerchecker.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-customer-profiles',
  templateUrl: './customer-profiles.component.html',
  styleUrls: ['./customer-profiles.component.scss']
})
export class CustomerProfilesComponent implements OnInit {

  @ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  search : String ="";
  selectedId: number;
  totalItems = 0;
      selectedRow;

  public daterange: any = {};

  // columns we will show on the table
  public displayedColumns = ['firstName', 'lastName', 'studentEmail', 'yearOfStudy', 'registrationNumber', 'course' ];
  //the source where we will get the data
  
  listofcustomers! : Profiles [];
  recentDataSource;
  recentTableColumns: string[] = [
    'name',
    'customerNumber',
     'email',
      'actions'];

     
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService, 
    private http : HttpClient,
    private service: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
    this.gettotalItems();
    
  }
  getProfiles() {
    this.service.getAllCustomers()
    .subscribe((results: any) =>{
      this.listofcustomers = results;
      this.recentDataSource.data = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
      this.recentDataSource.paginator = this.paginator;
      if(this.selectedRow.customerNumber == results.customerNumber || this.selectedRow.email == results.email){
        console.log("THe customer details match");
        const dialogRef = this.dialog.open(SuccessfulComponent);

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }else{
        const dialogRef = this.dialog.open(ErrorComponent);

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
      console.log(this.recentDataSource);
    } );
  }
  gettotalItems() {
    this.service.getNumberCountProfile().subscribe((response: any) => {
      //console.log(response);
       this.totalItems = response;
    });
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  checked(row){
    this.selectedRow = row;
    console.log(row)
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewcustomersComponent,{
      data:{
        customerNumber: this.selectedRow.customerNumber,
        name: this.selectedRow.name,
        email: this.selectedRow.email,
        postalAddress: this.selectedRow.postalAddress,
        physicalAddress: this.selectedRow.physicalAddress,
        pobCountry: this.selectedRow.pobCountry,
        pobStreet: this.selectedRow.pobStreet,
        pobTown: this.selectedRow.pobTown,
        pobPostalAddress: this.selectedRow.pobPostalAddress,
        pobPhysicalAddress: this.selectedRow.pobPhysicalAddress,
        Name: this.selectedRow.Name,
        nokEmail: this.selectedRow.nokEmail,
        nokRelationship: this.selectedRow.nokRelationship,
        nokPhone: this.selectedRow.nokPhone,
        nokLegalId: this.selectedRow.nokLegalId,
        nokLegalIdType: this.selectedRow.nokLegalIdType,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  exportexcel(): void
  {
    const rows = [...this.recentDataSource.data];
    this.service.buildProfilesExcel("Customer Profiles", rows).then((val) => {
      this.toastr.info("Excel Downloading ..");
    });

  }
  
  disableCustomer(){
    const dialogRef = this.dialog.open(MarkercheckerComponent,{
      data:{
        customerNumber: this.selectedRow.customerNumber,
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteseleted() {

  }
  // doFilter = (value: string) => {
  //   this.recentDataSource.filter = value.trim().toLocaleLowerCase();
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }
  // selectedDate = (value: any, range: any) =>{
  //   this.recentDataSource.range.value = value.trim();
    
  // }

}

