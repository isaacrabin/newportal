import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAllTransaction(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'Transactions/v1/alltransactions'
    );
  }
  getTransactionById(id: any){
    return this.http.get(
      environment.baseurl + 'Transactions/v1/transactions?id='+id
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'Transactions/v1/transactions-count'
    );
  }
  saveTransactionData(data){
    return this.http.post<any>(
      environment.baseurl + '/Transactions/v1/savetransactions', data
    );
    // return this.taskRef.push(task);
  }
  updateTransactionData(id: number, data: any){
    // console.log(data);
    return this.http.put(
      environment.baseurl + '/Transactions/v1/update-transaction?id='+id, data
    );

    // return this.taskRef.update(key,value);
  }
  deleteTransactionData(id: any, data: any){
    return this.http.delete(
      environment.baseurl + '/Transactions/v1/delete_transactions?id='+id, data
    );
    // return this.taskRef.remove(key);
  }

}
