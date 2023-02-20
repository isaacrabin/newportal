import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AuthUtils } from "app/core/auth/auth.utils";
import { environment } from "../../../environments/environment";
import { SubscriberService } from "../user/subscriber.service";

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  get accessToken(): string {
    return localStorage.getItem("access_token") ?? "";
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(payload): Observable<any>{ 
    return  this._httpClient.post<any>(
      `${environment.baseurl}portal/v1/login`,
      payload
    );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem("access_token");
    // Set the authenticated flag to false
    this._authenticated = false;
    // Return the observable
    return of(true);
  }
}
