import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TreoAnimations } from "@treo/animations";
import { TreoAlertType } from "@treo/components/alert";
import { TokenService } from "_services/token.service";
import { AuthService } from '_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { EncrdecrService } from "_services/encrdecr.service";
import CryptoJS from "crypto-js";

@Component({
  selector: "auth-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: TreoAnimations,
})
export class AuthSignInComponent implements OnInit {
  @ViewChild("signInNgForm") signInNgForm: NgForm;

  alert: { type: TreoAlertType; message: string } = {
    type: "success",
    message: "",
  };
  
  signInForm: FormGroup;
  showAlert: boolean = false;
  

  constructor(
    private _activatedRoute: ActivatedRoute,
    private tokenStorage: TokenService,
    private router: Router ,
    private service : AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private toastr: ToastrService,
    private encription : EncrdecrService
  ) {
    this.signInForm = this._formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
      rememberMe: [""],
    });
    this.signInForm.enable()
  }


  ngOnInit(): void {}
  
 
  signIn(): void {    
    // Disable the form
    this.signInForm.disable();      
    const formData = this.signInForm.value;  
    this.showAlert = false;
    const payload = {
      username: formData.username,
      password: formData.password,     
    };
  
    this.service.signIn(payload)
    .subscribe((response: any)=>{ 
      this.signInForm.enable();      
      switch(response.messageCode){
        case '00':               
          this.signInNgForm.resetForm();
          this.tokenStorage.saveToken(response.access_token);
          this.tokenStorage.saveRefreshToken(response.access_token);
          this.tokenStorage.saveUser(response);
          this._router.navigateByUrl("/bank/admin/dashboard");
           sessionStorage.setItem('isLoggedIn', 'true');
          this.toastr.success('logged in  successfully');
          localStorage.setItem('accessToken',response.access_token);
          break;

        case '01':    
            this.toastr.error(response.message,'');
            break;

        default:    
          this.toastr.error('Request failed. try again later.');
          break;
      }
      },
      (err) => {   
        this.signInForm.enable();
        if (  err.status == 400 || err.status == 401) {
          // Set the alert       
          this.showAlert = true;      
          this.toastr.error('Invalid Username or Password');
        }
        else{       
         this.toastr.error('Login Failed. Please try again later');
        }
      }
      );
    }
    
  }
  