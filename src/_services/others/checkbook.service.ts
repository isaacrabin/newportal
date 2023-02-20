import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckbookService {

  constructor(private http: HttpClient) { }

  getAllCheckbook(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'ChequeBookPages/v1/allchequebookpages'
    );
  }
  getCheckbookById(id: any){
    return this.http.get(
      environment.baseurl + 'ChequeBookPages/v1/chequebookpagesById?id='+id
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'ChequeBookPages/v1/chequebookpage-count'
    );
  }
  saveCheckbookData(data){
    return this.http.post<any>(
      environment.baseurl + 'ChequeBookPages/v1/savechequebooks', data
    );
    // return this.taskRef.push(task);
  }
  
  updateCheckbookData(id: number, data: any){
    // console.log(data);
    return this.http.put(
      environment.baseurl + 'ChequeBookPages/v1/updatechequebookpage?id='+id, data
    );
    // return this.taskRef.update(key,value);
  }
  deleteCheckbookData(id: any, data: any){
    return this.http.delete(
      environment.baseurl + 'ChequeBookPages/v1/delete-chequebooks?id='+ id, data
    );
    // return this.taskRef.remove(key);
  }
}
