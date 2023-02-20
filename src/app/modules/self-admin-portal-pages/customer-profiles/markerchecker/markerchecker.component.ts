import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MarkercheckerService } from '_services/markerchecker.service';
import { ProfileService } from '_services/profile.service';

@Component({
  selector: 'app-markerchecker',
  templateUrl: './markerchecker.component.html',
  styleUrls: ['./markerchecker.component.scss']
})
export class MarkercheckerComponent implements OnInit {

customerId: any;
updatedBy: any;
checked: boolean;
requestStatus : any;



  constructor(
    private router: Router,
    // private toastr: ToastrService,
     private http : HttpClient,
     private service: MarkercheckerService,
     private _formBuilder: FormBuilder,
     public dialogRef: MatDialogRef<MarkercheckerComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any
     ) { }
   
     status = this._formBuilder.group({
      custId: new FormControl(''),
      updatedBy: new FormControl(''),
      status : new FormControl('')
    });
     onNoClick(): void {
       this.dialogRef.close();
     }

  ngOnInit(): void {
    this.service.getStatus().subscribe(results=>{
      this.status.value.custId = results.customerId;
      this.status.value.updatedBy = results.updatedBy;
      this.status.value.requestStatus = results.requestStatus;

      if(this.data.customerNumber == results.customerId){

      }
      if(results.requestStatus == 'reject'){
        this.checked = false;
      }else{
        this.checked = true;
      }
    });
  }
  
  updatingStatus(arg0: any) {
    
    this.service.updateStatus(this.customerId).subscribe(results=>{
      if(this.data.customerNumber == this.customerId){
          this.requestStatus = results;
      }else{
        console.log('The customer Ids do not match');
      }
    });
  }
  addStatus(){
    this.service.addStatus(this.status).subscribe(results =>{
        this.status = results;
    });
    console.log(this.status);

  }
  

}
