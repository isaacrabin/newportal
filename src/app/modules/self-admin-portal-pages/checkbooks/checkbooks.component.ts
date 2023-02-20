import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { OrderedCheckbookService } from '_services/ordered-checkbook.service';
import { Checkbooks } from '../interfaces';
import { ViewcheckbookComponent } from './viewcheckbook/viewcheckbook.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkbooks',
  templateUrl: './checkbooks.component.html',
  styleUrls: ['./checkbooks.component.scss']
})
export class CheckbooksComponent implements OnInit {

  search : String ="";
  totalItems = 0;
  data!: Checkbooks[];
  recentDataSource;
  recentTableColumns: string[] = [
    'accountName',
    'accountNumber', 
    'numberOfPages', 
    'pickUpBranch', 
     'actions'
    ];
    selectedRow;
    @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    private router: Router, 
    private http : HttpClient,
    private service: OrderedCheckbookService,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.getCheckbooks();
    this.gettotalItems();
    
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  openDialog() {
    const dialogRef = this.dialog.open(ViewcheckbookComponent,{
      data:{
        accountName: this.selectedRow.accountName,
        accountNumber: this.selectedRow.accountNumber,
        numberOfPages: this.selectedRow.numberOfPages,
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
    this.service.buildCheckbookExcel("Ordered Checkbook", rows).then((val) => {
       this.toastr.info("Excel Downloading ..");
    });

  }
  getCheckbooks() {
    this.service.getAllCheckbook()
    .subscribe(results => {
      this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
        console.log(results);

    });
  }
  gettotalItems(){
    this.service.getTotalNumberCount().subscribe((response: any) => {
      //console.log(response);
       this.totalItems = response;
    });
  }
  // doFilter = (value: string) => {
  //   this.recentDataSource.filter = value.trim().toLocaleLowerCase();
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }
}
