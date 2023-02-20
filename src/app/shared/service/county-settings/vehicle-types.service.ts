import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleTypesService {

  constructor(private http: HttpClient) { }


  create(payload:any){
    return this.http.post(`${environment.baseUrl}/county-service/vehicle-type/create-vehicle-type`, payload)
  }

  getAll(){
    return this.http.get(`${environment.baseUrl}/county-service/vehicle-type/get-vehicle-types`)
  }

  getOne(){

  }

  update(id:string, payload:any){
    return this.http.put(`${environment.baseUrl}/county-service/vehicle-type/update-vehicle-type/${id}`,payload)
  }

  delete(id:string){
    return this.http.delete(`${environment.baseUrl}/county-service/vehicle-type/delete-vehicle-type/${id}`)
  }
}
