
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(
    public router: Router,
    private authService : AuthService,
    private toastr: ToastrService
    ) {};

  canActivate() : boolean{
    console.log("OnlyLoggedInUsers");

    let isloggedin = this.authService.isLoggedIn();
      if (isloggedin || sessionStorage.getItem('isLoggedIn') === 'true') {
        console.log('Here');
        return true;

      }else if(sessionStorage.getItem('isLoggedIn') === 'false'){
        this.router.navigate(['/sign-in']);
        
        
        this.toastr.warning("Permission denied, please log in");
        return false;
      }
      
     

  }
}
