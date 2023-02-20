import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ParkingApplicationsService {
  constructor(private http: HttpClient) {}

  getDaily() {
    return this.http.get(`${environment.baseUrl}/county-service/service-applications/daily-parking-applications`);
  }

  getSeasonal() {
    return this.http.get(`${environment.baseUrl}/county-service/service-applications/seasonal-parking-applications`);
  }
}
