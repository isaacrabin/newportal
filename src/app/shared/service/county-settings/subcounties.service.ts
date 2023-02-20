import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcountiesService {

  constructor(private http: HttpClient) { }


  create(payload: any){
    return this.http.post(`${environment.baseUrl}/county-service/subcounties`,payload)
  }

  getAll(countyId: string){
    return this.http.get(`${environment.baseUrl}/county-service/subcounties`)
  }

  getOne(){}

  update(id: string,payload){
    return this.http.put(`${environment.baseUrl}/county-service/subcounties/${id}`, payload)
  }

  delete(id: string){
    return this.http.delete(`${environment.baseUrl}/county-service/subcounties/${id}`)
  }
}
