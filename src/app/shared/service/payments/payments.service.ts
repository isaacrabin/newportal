import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }


  getBills(){
    return this.http.get(`${environment.baseUrl}/county-service/billing/bills`)
  }

  getTransactions(){
    return this.http.get(`${environment.baseUrl}/county-service/transactions/get-transactions`)
  }

  getMpesaTransactions(){
    return this.http.get(`${environment.baseUrl}/county-service/transactions/mpesa-transactions`)
  }
}
