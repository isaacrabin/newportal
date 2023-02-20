import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingTypesService {

  constructor(private http: HttpClient) { }


  create(payload){
    return this.http.post(`${environment.baseUrl}/county-service/parking-type`,payload)
  }

  getAll(){
    return this.http.get(`${environment.baseUrl}/county-service/parking-type`)
  }

  getOne(){}

  update(id: string,payload: any){
    return this.http.put(`${environment.baseUrl}/county-service/parking-type/${id}`,payload)
  }

  delete(id:string){
    return this.http.delete(`${environment.baseUrl}/county-service/parking-type/${id}`)
  }
}
