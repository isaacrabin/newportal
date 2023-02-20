import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(private http: HttpClient) { }


  create(payload){
    return this.http.post(`${environment.baseUrl}/county-service/zones`, payload)
  }

  getAll(){
    return this.http.get(`${environment.baseUrl}/county-service/zones`)
  }

  getOne(){}

  update(id: string, payload){
    return this.http.put(`${environment.baseUrl}/county-service/zones/${id}`,payload)
  }

  delete(id:string){
    return this.http.delete(`${environment.baseUrl}/county-service/zones/${id}`)
  }
}
