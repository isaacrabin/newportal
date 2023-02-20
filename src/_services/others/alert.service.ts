import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http: HttpClient) { }

  getAllAlerts(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get-allfrequencies'
    );
  }
  getAlertById(id: any){
    return this.http.get(
      environment.baseurl + 'v1/getfrequency-byId?id='+id
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/frequency-count'
    );
  }
  saveAlertData(data){
    return this.http.post<any>(
      environment.baseurl + 'v1/savefrequency', data
    );
    // return this.taskRef.push(task);
  }
  updateAlertData(id: any,data: any){
    return this.http.put(
      environment.baseurl + 'v1/updatefrequency?id='+id, data
    );
    // return this.taskRef.update(key,value);
  }
  deleteAlertData(id: number, data: any){
    return this.http.delete(
      environment.baseurl + 'v1/delete-frequency?id='+id, data
    );
    // return this.taskRef.remove(key);
  }
  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/alertsweekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/alertcount/mothly?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/alertscount/yearly?year='+data
    );
  }

}
