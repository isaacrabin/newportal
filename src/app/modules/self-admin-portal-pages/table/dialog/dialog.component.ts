import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  
 
  //Loader
  isLoading: boolean = false;
  //Permission
  viewgroups = true;


  // RegisterForm: FormGroup;
  RegisterForm: FormGroup;
  
  submitted = false;
  constructor( 
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
    ) { }
  
    

  ngOnInit(): void {
    



  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {

    
  }

}
