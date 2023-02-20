import { Injectable } from '@angular/core';
//Token Keys
const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  //Method to clear session when signing out
  signOut(): void {
    window.sessionStorage.clear();
  }
  //Method to save token
  public saveToken(token: string): void {
    //remove initial token
    window.sessionStorage.removeItem(TOKEN_KEY);
    //replace with the new token
    window.sessionStorage.setItem(TOKEN_KEY, token);

    //assign user with token using the userid
    const user = this.getUser(); //to get the user
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  //Method to get token
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //Method to refresh token
  public saveRefreshToken(token: string): void {
    //remove initial refreshed token
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    //set the token to the recently refreshed token
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  //Method to get the token refreshed
  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  //Method to save the user with the new userkey
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //Method to get the user
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
