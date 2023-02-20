import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  getGroup(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get-user'
    );
  }
  addGroup(data: any){
    return this.http.post<any>(
      environment.baseurl + 'v1/registeruser',data
    );
  }
  getGroupByName(data: any) {
    return this.http.get(
      environment.baseurl + 'v1/get-userby-username?username'+data
    );
  }
  updateGroupData(id: any, data: any){
    console.log(data);
    return this.http.put(
      environment.baseurl + 'v1/update-users?username'+id, data
    );
    // return this.taskRef.update(key,value);
  }

  deleteGroupData(id: number, data: any){
    console.log(id);
    return this.http.delete(
      environment.baseurl + 'v1/delete-user?username'+id, data
    );
    // return this.taskRef.remove(key);
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/total-number-of-accounts'
    );
  }
  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-weekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/get-totalusercount-monthly?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-yearly?year'+data
    );
  }


}
