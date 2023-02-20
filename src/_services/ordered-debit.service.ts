import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import zipcelx from 'zipcelx';


@Injectable({
  providedIn: 'root'
})
export class OrderedDebitService {

  constructor(private http: HttpClient) { }

  getTotalNumberCountCards(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/customer-debitorder-Count'
    );
  }
  getAllDebits(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'get/v1/list-of-customerdebitcard-order'
    );
  }
  getFilterById(id: any){
    return this.http.get(
      environment.baseurl + 'get/v1/customer-debitcard-byaccountId?accountId='+id
    );
  }
  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/get-totalcounts-betweendates?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/gettotal-debit-count?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/get-yearlycount?year='+data
    );
  }
  buildCardExcel(exportfile: string, sheets: any): any {
    const header = {

      accountId: "Account ID",
      accountName: "Account Name",
      accountNumber: "Account Number",
      firstName: "First Name",
      surname: "Surname",
      pickupBranch: "Pick Up Branch",
      cardType: "Card Type",


    };
    // make header
    sheets.unshift(header);
    const sheetsArray = [];
    sheets.forEach(valueData => {
      let rowArry = [];
      rowArry[0] = {
        value: valueData.accountId,
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
        value: valueData.firstName,
        type: 'string'
      };
      rowArry[4] = {
        value: valueData.surname,
        type: 'string'
      };
      rowArry[5] = {
        value: valueData.pickupBranch,
        type: 'string'
      };
      rowArry[6] = {
        value: valueData.cardType,
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
