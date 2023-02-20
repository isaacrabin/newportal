import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  getAllSubscription(): Observable<any> {
    return this.http.get(
      environment.baseurl + '/Subscriptions/v1/get_allsubscriptions'
    );
  }
  getSubscriptionById(id: any){
    return this.http.get(
      environment.baseurl + 'Subscriptions/v1/get-subscriptionsbyId?id='+id
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'Subscriptions/v1/subscriptionsby-count'
    );
  }
  saveSubscriptionData(data){
    return this.http.post<any>(
      environment.baseurl + 'Subscriptions/v1/savesubscriptions', data
    );
    // return this.taskRef.push(task);
  }
  updateSubscriptionData(id: number, data: any){
    return this.http.put(
      environment.baseurl + 'Subscriptions/v1/update-subscription?id='+id, data
    );
    // return this.taskRef.update(key,value);
  }
  deleteSubscriptionData(id: any, data: any){
    return this.http.delete(
      environment.baseurl + 'Subscriptions/v1/delete-subscriptionsbyid?id='+id, data
    );
    // return this.taskRef.remove(key);
  }
}
