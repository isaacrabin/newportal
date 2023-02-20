import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BranchesService } from '_services/others/branches.service';
import { Branches } from '../interfaces';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {

  search : String ="";
  data! : Branches
  recentDataSource;
  recentTableColumns: string[] = ['bname', 'bcode', 'baddress', 'bemail', 'aos'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(
    public dialog: MatDialog,
    //  private toastr: ToastrService,
     private service: BranchesService

  ) { }

  ngOnInit(): void {
    this.getBranches();
  }
  getBranches(){
    this.service.getAllBranches()
    .subscribe(results => {
      this.data = results;
      this.recentDataSource = new MatTableDataSource[results];
        console.log(results);
    });
  }
  ngAfterViewInit(): void {
    this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
  }
  doFilter = (value: string) => {
    this.recentDataSource.filter = value.trim().toLocaleLowerCase();
  }

}
