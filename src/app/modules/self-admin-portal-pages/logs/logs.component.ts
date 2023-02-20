import { Component, OnInit,ViewChild  } from '@angular/core';
import { Logs } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LogsService } from '_services/logs.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  search : String ="";
  selectedId: number;
  totalItems = 0;
  selectedRow;
  //the source where we will get the data
  data!: Logs[];
  recentDataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  recentTableColumns: string[] = [
      'actions',
      'requestBody',
      'message',
      'trials',
      'updateAt',
      'statusCode',
      'email',
      'createdAt',
    ];

      
  constructor(
    public dialog: MatDialog,
    private router: Router,
    // private toastr: ToastrService, 
    private http : HttpClient,
    private service: LogsService
  ) { }

  ngOnInit(): void {
    this.getLogs();
  }
  getLogs() {
    this.service.getLOgs()
    .subscribe((results: any) =>{
      this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
        console.log(results);
    } );
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  
  disableCustomer(){
    
  }
  deleteCustomer(){
    
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

}

