import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddnewsComponent } from './addnews/addnews.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { News } from '../interfaces';
import { NewsService } from '_services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  search : String ="";
  data!: News

  recentDataSource;
  recentTableColumns: string[] = ['name','actions'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public service : NewsService
  ) { }

  ngOnInit(): void {
    this.getNewsletter();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddnewsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getNewsletter(){
    this.service.getNews()
    .subscribe((results: any) =>{
      this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
        console.log(results);
    } );

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
