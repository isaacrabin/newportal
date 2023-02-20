import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { InitialData } from "app/app.types";
import { AuthUserDetailsService } from "./shared/service/auth-user-details.service";

@Injectable({
  providedIn: "root",
})
export class InitialDataResolver implements Resolve<any> {
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   * @param {AuthUserDetailsService} _authUserDetailsService
   */
  constructor(private _httpClient: HttpClient, private _authUserDetailsService: AuthUserDetailsService) { }

  private _loadUser(): Observable<any> {
    return this._authUserDetailsService.getUserDetails();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Use this resolver to resolve initial mock-api for the application
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InitialData> {
    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
      this._httpClient.get<any>("api/common/messages"),
      this._httpClient.get<any>("api/common/navigation"),
      this._httpClient.get<any>("api/common/notifications"),
      this._httpClient.get<any>("api/common/shortcuts"),
      this._loadUser(),
    ]).pipe(
      map(([messages, navigation, notifications, shortcuts, user]) => ({
        messages,
        navigation: {
          compact: navigation.compact,
          default: navigation.default,
          futuristic: navigation.futuristic,
          horizontal: navigation.horizontal,
          tubi_admin: navigation.tubi_admin,
          school_admin: navigation.school_admin,
          teacher: navigation.teacher,
          county: navigation.county,
          bank_admin: navigation.bank_admin
        },
        notifications,
        shortcuts,
        user,
      }))
    );
  }
}

