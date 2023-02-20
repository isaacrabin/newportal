import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '_services/profile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  profiles : any = [];
  selectedId: number;
  searchText : any;

 

  constructor(
    private router: Router,
    private toastr: ToastrService,
     private http : HttpClient,
     private service: ProfileService,
     public dialogRef: MatDialogRef<ViewprofileComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
     ) { }
   
     onNoClick(): void {
       this.dialogRef.close();
     }

  ngOnInit(): void {
  }
  
  exportexcel(): void
  {
    const rows = [...this.profiles];
    this.service.buildProfilesExcel("Customer Profiles", rows).then((val) => {
      this.toastr.info("Excel Downloading ..");
    });

  }
  
  

}

