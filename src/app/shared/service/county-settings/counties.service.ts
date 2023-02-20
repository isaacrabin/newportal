import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountiesService {

  constructor(private http: HttpClient) { }


  getAll(){
    return this.http.get(`${environment.baseUrl}/bank-service/counties`)
  }
}
