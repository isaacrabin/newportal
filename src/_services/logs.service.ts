import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private http: HttpClient) { }
  getLOgs(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get-user'
    );
  }
}
