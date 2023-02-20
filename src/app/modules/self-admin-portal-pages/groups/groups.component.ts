import { Component, OnInit,ViewChild  } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RegisterService } from '_services/register.service';
import { Groups } from '../interfaces';
import { AddgroupsComponent } from './addgroups/addgroups.component';
import { SuccessfulComponent } from '../customer-profiles/messages/successful/successful.component';
import { ErrorComponent } from '../customer-profiles/messages/error/error.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewgroupsComponent } from './viewgroups/viewgroups.component';
import { MarkercheckerComponent } from '../customer-profiles/markerchecker/markerchecker.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  search : String ="";
  data!: Groups
  recentDataSource;
  recentTableColumns: string[] = ['name','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   //Loader
   isLoading: boolean = false;
 
   // RegisterForm: FormGroup;
   RegisterForm: FormGroup = new FormGroup({
     email: new FormControl(''),
     uname: new FormControl(''),
     phone: new FormControl(''),
     role: new FormControl(''),
   })
   selectedRow;
   submitted = false;
   constructor( private formBuilder: FormBuilder,
    public dialog: MatDialog,
    //  private toastr: ToastrService,
      private service : RegisterService) { }
 
   ngOnInit(): void {
     this.getGroups();
     this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
 
   }

  openDialog() {
    const dialogRef = this.dialog.open(AddgroupsComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getGroups() {
    this.service.getGroup()
    .subscribe((results: any) =>{
      this.data = results;
      this.recentDataSource = new MatTableDataSource(results);
      this.recentDataSource.sort = this.sort;
    this.recentDataSource.paginator = this.paginator;
        console.log(results);
    } );
  }
  
  doFilter = (value: string) => {
    this.recentDataSource.filter = value.trim().toLocaleLowerCase();
  }
  openDialogdelete(){
    const dialogRef = this.dialog.open(DeleteComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onClickRow(row){
    this.selectedRow = row;
    console.log(row)
  }
  openDialogView(){
    // MarkercheckerComponent
    const dialogRef = this.dialog.open(ViewgroupsComponent,{
      data:{
          name: this.selectedRow.name,
      }
    });
      

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.recentDataSource.filter = filterValue.trim().toLowerCase();
  }

}
