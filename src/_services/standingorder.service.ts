import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandingorderService {

  constructor(private http: HttpClient) { }

  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-weekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-yearly?year='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-yearly?year=2023'+data
    );
  }
}
