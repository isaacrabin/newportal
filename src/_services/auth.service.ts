import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import CryptoJS from 'crypto-js';


//for json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  constructor(private http: HttpClient) { }
  //get token from localStorage
  getToken(){
    
    return localStorage.getItem('token')
  }
  //post the login in the database and check if the authentification is true
  
  signIn(payload): Observable<any>{ 
    return  this.http.post<any>(
      `${environment.baseurl}v1/login`,
      payload
    );
  }
  // Method to confirm the login access when granted permission
  // If the login has no details, then it should not log in
  isLoggedIn() {
    return this.loggedIn;
  }
  // login, register

  refreshToken(token: string) {
    return this.http.post(environment.baseurl + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }
}
