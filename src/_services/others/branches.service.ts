import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BranchesService {



  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/allbranches?'
    );
  }

  getBranchesById(id: any){
    return this.http.get(
      environment.baseurl + 'v1/getbranchbyid?id='+id
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/branches-count'
    );
  }
  saveBranchesData(data){
    //console.log(data);
    return this.http.post<any>(
      environment.baseurl + 'v1/savebranch', data
    );
  }
  updateBranchesData(id: any, data: any){
    console.log(data);
    return this.http.put(
      environment.baseurl + 'update/v1/branch?id='+id, data
    );
    // return this.taskRef.update(key,value);
  }

  deleteBranchesData(id: number, data: any){
    console.log(id);
    return this.http.delete(
      environment.baseurl + 'v1/delete-branches?id='+id, data
    );
    // return this.taskRef.remove(key);
  }

  //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkQXQiOiIwMi8wOC8yMDIyIDAzOjEwIiwiaWRlbnRpZmljYXRpb24iOiIiLCJFeHBpcmVzQXQiOiIwMi8wOC8yMDIyIDAzOjQwIn0.srSAEFdYo97REfg9j33tLyjnGAa1awIv5sgvDyD0OJ4';
}
