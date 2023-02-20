import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import zipcelx from 'zipcelx';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  getAllCustomerAccounts(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/list-customerAccounts'
    );
  }
  getTotalNumberAvailable(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/total-number-of-accounts'
    );
  }
  getFilterByName(data: any) {
    return this.http.get(
      environment.baseurl + 'get/v1/filterby-accountName?accountName='+data
    );
  }
  getFilterByNumber(data: any){
    return this.http.get(
      environment.baseurl + 'get/v1/filterby-accountNumber?accountNumber='+data
    );
  }
  getFilterById(id: any){
    return this.http.get(
      environment.baseurl + 'get/v1/filterby-customerId?customerId='+id
    );
  }

  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-weekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/get-standingOrder-count-monthly?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/standingorder-count-yearly?year'+data
    );
  }
  buildCustomersExcel(exportfile: string, sheets: any): any {
    const header = {
      customerId: "Customer ID",
      accountName: "Account Name",
      accountNumber: "Account Number",
      accountType: "Account Type",
      currency: "Currency",
      restrictionreason: "Restriction Reason",
      restrictionType: "Restriction Type",
      restrictionCode: "Restriction Code",
      restrictedBy: "Restricted By",
      restrictionDate: "Restriction Date",


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
        value: valueData.accountName,
        type: 'string'
      };
      rowArry[2] = {
        value: valueData.accountNumber,
        type: 'string'
      };
      rowArry[3] = {
        value: valueData.accountType,
        type: 'string'
      };
      rowArry[4] = {
        value: valueData.currency,
        type: 'string'
      };
      rowArry[5] = {
        value: valueData.restrictionreason,
        type: 'string'
      };
      rowArry[6] = {
        value: valueData.restrictionType,
        type: 'string'
      };
      rowArry[7] = {
        value: valueData.restrictionCode,
        type: 'string'
      };
      rowArry[8] = {
        value: valueData.restrictedBy,
        type: 'string'
      };
      rowArry[9] = {
        value: valueData.restrictedDate,
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
