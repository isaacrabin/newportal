import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private authService : AuthService,
     private toastr: ToastrService
    ) {};
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
    // let isloggedin = this.authService.isLoggedIn();
    // if (isloggedin) {
    //   console.log("YOu have guard")
    //   return true;
    // } else {
    //   window.alert("You don't have permission to view this page");
    //   this.toastr.error("")
    //   return false;
    // }
  }
  
}
