import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkercheckerService {

  constructor(private http: HttpClient) { }
  getStatus(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get/allcheker'
    );
  }
  addStatus(data: any){
    return this.http.post<any>(
      environment.baseurl + 'v1/saveChecker',data
    );
  }
  updateStatus(data: any){
    console.log(data);
    return this.http.put(
      environment.baseurl + 'v1/updateChecker', data
    );
    // return this.taskRef.update(key,value);
  }
}
