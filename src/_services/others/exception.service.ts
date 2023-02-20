import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExceptionService {

  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'Branches/v1/allbranches'
    );
  }
}
