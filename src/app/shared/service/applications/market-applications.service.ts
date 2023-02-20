import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class MarketApplicationsService {
  constructor(private http: HttpClient) {}

  getCessApplications() {
    return this.http.get(`${environment.baseUrl}/county-service/service-applications/market-cess-applications`);
  }
}
