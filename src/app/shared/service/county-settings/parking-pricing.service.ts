import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ParkingPricingService {
  constructor(private http: HttpClient) {}

  downloadFile(type: string) {
    return this.http.get(`${environment.baseUrl}/county-service/parking-pricing?parkingType=${type}`, {responseType: 'blob'});
  }

  uploadFile(data) {
    return this.http.post(`${environment.baseUrl}/county-service/parking-pricing/pricing-upload`,data)
  }
}
