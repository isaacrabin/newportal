import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getNews(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/get-user'
    );
  }
  saveNewsData(data : any){
    return this.http.get(
      environment.baseurl + 'selfservice/v1/registeruser', data
    );
  }
  deleteNewsData(id: any, data: any){
    return this.http.get(
      environment.baseurl + 'selfservice/v1/registeruser'+id, data
    );
  }

  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}
