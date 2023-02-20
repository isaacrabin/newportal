export interface Profiles{
  customerNumber: string;
  name: string;
  email: string;
  postalAddress: string;
  physicalAddress: string;
  pobCountry: string;
  pobStreet: string;
  pobTown: string;
  pobPostalAddress: string;
  pobPhysicalAddress: string;
  Name: string;
  nokEmail: string;
  nokRelationship: string;
  nokPhone: string;
  nokLegalId: string;
  nokLegalIdType: string;
}
export interface Attempts{
  customerNumber: string;
  name: string;
  email: string;
  postalAddress: string;
  physicalAddress: string;
  pobCountry: string;
  pobStreet: string;
  pobTown: string;
  pobPostalAddress: string;
  pobPhysicalAddress: string;
  Name: string;
  nokEmail: string;
  nokRelationship: string;
  nokPhone: string;
  nokLegalId: string;
  nokLegalIdType: string;
}
export interface Customers{
  accountName: string;
  accountNumber: string;
  Currency: string;
  accountType: string;
  CreatedAt: string;
  restrictionreason:string;
  restrictionType: string;
  restrictionDate: string;
  restrictionCode: string;
}
export interface Branch {
    aname:string; 
    ano:string; 
    fname:string; 
    sname:string; 
    branch:string; 
    ctype:string;
    actions:any;
}
export interface Cards {

  accountName:string; 
  accountNumber:string; 
  firstName:string; 
  surname:string; 
  pickUpBranch:string; 
  cardType:string;
  CreatedAt:string;
  actions: any;
  
}
export interface Checkbooks{
  accountName: string;
  accountNumber: string;
  numberOfPages: string;
  pickUpBranch: string;
  cardType: string;
  CreatedAt: string;
}
export interface Groups{
  accountName: string;
  accountNumber: string;
  numberOfPages: string;
  pickUpBranch: string;
  cardType: string;
  CreatedAt: string;
}
export interface Branches{
  branchName:string;
branchCode:string;
branchEmail:string;
accountOpenStatus:string;
branchAddress:string; 
}
export interface News{
  name: string;
  
}
export interface Logs{
  actions: string;
  requestBody: string;
  message: string;
  trials: string;
  updateAt: string;
  statusCode: string;
  email: string;
  createdAt: string;
  
}

