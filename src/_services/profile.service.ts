import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import zipcelx from 'zipcelx';
import { map } from 'rxjs/internal/operators/map';
import { Profiles } from 'app/modules/self-admin-portal-pages/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/customer_list'
    );
  }
  
  
  getFilterName(data: any){
    return this.http.get(
      environment.baseurl + 'v1/customer_byname?name='+data
    );
  }
  getFetchById(id: any){
    return this.http.get(
      environment.baseurl + 'v1/customer_customerId?customerId='+id
    );
  }
  getFilterNumber(data: any){
    return this.http.get(
      environment.baseurl + 'v1/customer_customerNumber?docNumber='+data
    );
  }
  getNumberCountProfile(): Observable<any> {
    return this.http.get(
      environment.baseurl + 'v1/customerprofileCount'
    );
  }
  getFilterbetweendates(startDate: any, endDate:any){
    return this.http.get(
      environment.baseurl + 'v1/customerprofilecount-weekly?startDate='+startDate+'&endDate=2023-02-03'+endDate
    );
  }
  getFiltermonthly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/customerprofilecount-monthly?month='+data
    );
  }
  getFilteryearly(data: any){
    return this.http.get(
      environment.baseurl + 'v1/customerprofilecount-yearly?year='+data
    );
  }
  buildProfilesExcel(exportfile: string, sheets: any): any {
    const header = {
      customerNumber: "CUSTOMER Number",
      customerId: "CUSTOMER ID",
      name: "NAME",
      email: "EMAIL",
      postalAddress: "POSTAL ADDRESS",
      physicalAddress: "PHYSICAL ADDRESS",
      nokName: "NEXT OF KIN NAME",
      nokEmail: "NEXT OF KIN RELATIONSHIP",
      nokRelationship: "NEXT OF KIN RELATIONSHIP",
      nokPhone: "NEXT OF KIN PHONE",
      nokLegalId: "NEXT OF KIN LEGAL ID",
      nokLegalIdType: "NEXT OF KIN LEGAL ID TYPE",
      pobCountry: "COUNTRY",
      pobStreet: "STREET",
      pobTown: "TOWN",
      pobPostalAddress: "PO BOX POSTAL ADDRESS",
      pobPhysicalAddress: "PO BOX PHYSICAL ADDRESS"


    };
    // make header
    sheets.unshift(header);
    const sheetsArray = [];
    sheets.forEach(valueData => {
      let rowArry = [];
      rowArry[0] = {
        value: valueData.customerNumber,
        type: 'string'
      };

      rowArry[1] = {
        value: valueData.customerId,
        type: 'string'
      };
      rowArry[2] = {
        value: valueData.name,
        type: 'string'
      };
      rowArry[3] = {
        value: valueData.email,
        type: 'string'
      };
      rowArry[4] = {
        value: valueData.postalAddress,
        type: 'string'
      };
      rowArry[5] = {
        value: valueData.physicalAddress,
        type: 'string'
      };
      rowArry[6] = {
        value: valueData.nokName,
        type: 'string'
      };
      rowArry[7] = {
        value: valueData.nokEmail,
        type: 'string'
      };
      rowArry[8] = {
        value: valueData.nokRelationship,
        type: 'string'
      };
      rowArry[9] = {
        value: valueData.nokPhone,
        type: 'string'
      };
      rowArry[10] = {
        value: valueData.nokLegalId,
        type: 'string'
      };
      rowArry[11] = {
        value: valueData.nokLegalIdType,
        type: 'string'
      };
      rowArry[12] = {
        value: valueData.pobCountry,
        type: 'string'
      };
      rowArry[13] = {
        value: valueData.pobStreet,
        type: 'string'
      };
      rowArry[14] = {
        value: valueData.pobTown,
        type: 'string'
      };
      rowArry[15] = {
        value: valueData.pobPostalAddress,
        type: 'string'
      };
      rowArry[16] = {
        value: valueData.pobPhysicalAddress,
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
