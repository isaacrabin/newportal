import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '_services/register.service';

@Component({
  selector: 'app-addgroups',
  templateUrl: './addgroups.component.html',
  styleUrls: ['./addgroups.component.scss']
})
export class AddgroupsComponent implements OnInit {

  //Loader
  isLoading: boolean = false;
  //Permission
  viewgroups = true;


  // RegisterForm: FormGroup;
  RegisterForm: FormGroup;
  
  submitted = false;
  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private service : RegisterService,
    public dialogRef: MatDialogRef<AddgroupsComponent>,
    
    
    ) { }
  
    

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]],
      uname: ["", [Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      ),]],
      phone: ["", [Validators.required,Validators.pattern(
        '^(?=.*[0-9]).{8,12}$'
      )]],
      role: ["", [Validators.required]],
    })



  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit(): void {

    this.submitted = true;
    this.isLoading = true;
        setTimeout(()=>{
          this.isLoading = false;
        }, 1000)
    if (this.RegisterForm.invalid) {
      this.toastr.warning("Registering details are invalid, please check again");
      return;
    }else{
      const Obj = {
        username: this.RegisterForm.value.uname,
        groupId: this.RegisterForm.value.role,
        phoneNo: this.RegisterForm.value.phone,
        email: this.RegisterForm.value.email,
       }

       this.service.register(Obj).subscribe((result)=>{
        console.log(result);
        this.submitted = false;
        this.RegisterForm.reset();
        this.toastr.success("User added successfully");
        console.log(result);
       });



    }
    console.log(JSON.stringify(this.RegisterForm.value, null, 2));
  }



}
