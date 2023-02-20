import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class WardsService {
  constructor(private http: HttpClient) {}

  create(payload: any) {
    return this.http.post(`${environment.baseUrl}/county-service/wards`, payload);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/county-service/wards/wards-in-county/84383431-eccf-4a47-a1f2-9bb7effeac60`);
  }

  getOne() {}

  update(id: string, payload: any) {
    return this.http.put(`${environment.baseUrl}/county-service/wards/${id}`, payload);
  }

  delete(id) {
    return this.http.delete(`${environment.baseUrl}/county-service/wards/${id}`);
  }
}
