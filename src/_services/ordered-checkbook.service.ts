import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import zipcelx from 'zipcelx';


@Injectable({
  providedIn: 'root'
})
export class OrderedCheckbookService {

  constructor(private http: HttpClient) { }

  getTotalNumberCount(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/chequebooksCount'
    );
  }
  getAllCheckbook(): Observable<any>{
    console.log();
    return this.http.get(
      environment.baseurl + 'get/v1/list/chequebookordered'
    );
  }
  getFilterById(id: any){
    console.log(id);
    return this.http.get(
      environment.baseurl + 'get/v1/customerchequbook-byaccountId?accountId='+id
    );
  }
  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/chequebook/weekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/chequebook/monthly?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/chequebook/yearly?year='+data
    );
  }
  buildCheckbookExcel(exportfile: string, sheets: any): any {
    const header = {
      customerId: "Customer ID",
      accountId: "Account ID",
      accountName: "Account Name",
      accountNumber: "Account Number",
      numberOfPage: "Number Of Pages",
      pickUpBranch: "Pick Up Branch",
      createdAt: "Created At",
    };
    // make header
    sheets.unshift(header);
    const sheetsArray = [];
    sheets.forEach(valueData => {
      let rowArry = [];
      rowArry[0] = {
        value: valueData.customerId,
        type: 'string'
      };

      rowArry[1] = {
        value: valueData.accountId,
        type: 'string'
      };
      rowArry[2] = {
        value: valueData.accountName,
        type: 'string'
      };
      rowArry[3] = {
        value: valueData.accountNumber,
        type: 'string'
      };
      rowArry[4] = {
        value: valueData.numberOfPage,
        type: 'string'
      };
      rowArry[5] = {
        value: valueData.pickUpBranch,
        type: 'string'
      };
      rowArry[6] = {
        value: valueData.createdAt,
        type: 'string'
      };

      sheetsArray.push(rowArry);
    }
    );

    const config = {
      filename: exportfile,
      sheet: {
        data: sheetsArray
      }
    };
    return zipcelx(config);
  }
}
