import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/allbranches'
    );
  }

  getTotalAccounts(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/total-number-of-accounts'
    );
  }
  getTotalProfiles(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/customerprofileCount'
    );
  }
  getTotalCards(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/customer-debitorder-Count'
    );
  }
  getTotalCheckbooks(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/customerchequebooksCount'
    );
  }
  getTotalAlerts(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/Alerts-count'
    );
  }
  getTotalStandingOrder(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get-standingOrder-counts'
    );
  }
}
