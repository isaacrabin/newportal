import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {


  constructor(private http: HttpClient) { }

  Savepermissons(data : any){
    return this.http.post(
      environment.baseurl + '', data
    );
  }
}
