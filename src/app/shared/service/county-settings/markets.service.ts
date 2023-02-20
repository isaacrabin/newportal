import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  constructor(private http: HttpClient) { }


  create(payload: any){
    return this.http.post(`${environment.baseUrl}/county-service/markets`,payload)
  }

  getAll(){
    return this.http.get(`${environment.baseUrl}/county-service/markets`)
  }

  getOne(){}

  update(id:string, payload:any){
    return this.http.put(`${environment.baseUrl}/county-service/markets/${id}`,payload)
  }

  delete(id:string){
    return this.http.delete(`${environment.baseUrl}/county-service/markets/${id}`)
  }
}
