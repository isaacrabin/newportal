import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderedDebitService } from '_services/ordered-debit.service';
import { Cards } from '../interfaces';
import { ViewcardsComponent } from './viewcards/viewcards.component';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  //Pagination variables
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;
  
  search : String ="";
  selectedId: any;
  totalItems = 0;
  data!: Cards [];
  //recentDataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  recentDataSource;
  recentTableColumns: string[] = [
    'accountName',
    'accountNumber', 
    'firstName', 
    'surname', 
    'pickUpBranch', 
    'cardType',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selectedRow;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private http : HttpClient,
    private service: OrderedDebitService,
    private toastr: ToastrService
  ) { }

  
  ngOnInit(): void {
    this.getCards();
    this.gettotalItems();
    this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
    
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  
  openDialog() {
    

    const dialogRef = this.dialog.open(ViewcardsComponent,{
      data:{
        accountName: this.selectedRow.accountName,
        accountNumber: this.selectedRow.accountNumber,
        firstName: this.selectedRow.firstName,
        surname: this.selectedRow.surname,
        pickUpBranch: this.selectedRow.pickUpBranch,
        cardType: this.selectedRow.cardType,
        CreatedAt: this.selectedRow.CreatedAt,
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
  exportexcel(): void
  {
    const rows = [...this.recentDataSource];
    this.service.buildCardExcel("Customer Profiles", rows).then((val) => {
      this.toastr.info("Excel Downloading ..");
    });

  }
  getCards() {
    this.service.getAllDebits()
    .subscribe(results => {
      this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
        console.log(results);

      
    });
    
  }
  gettotalItems(){
    this.service.getTotalNumberCountCards().subscribe((response: any) => {

       this.totalItems = response;
    });
    //console.log(response);
  }
  // doFilter = (value: string) => {
  //   this.recentDataSource.filter = value.trim().toLocaleLowerCase();
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }
}
