import { Component, OnInit,Inject } from '@angular/core';
import { AuthService } from '_services/auth.service';
import { GroupsService } from '_services/groups.service';
import { PermissionsService } from '_services/permissions.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewgroups',
  templateUrl: './viewgroups.component.html',
  styleUrls: ['./viewgroups.component.scss']
})
export class ViewgroupsComponent implements OnInit {

  //news

  acceptedaddnews: boolean;
  accepteddeletenews: boolean;

  //add user page
  accepted : boolean;

  jsonObject: JSON;
  arrayObj: any = [

    {
      accepted : true,
      acceptedaddnews : true,
      accepteddeletenews : true,
      groupId:'Admin'
    }

  ]

  constructor(
    private permservice : PermissionsService,
    private groupservice : GroupsService,
    public dialogRef: MatDialogRef<ViewgroupsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    //converted our arrayobject to json type and stored to variable ‘jsonObject’.
    this.jsonObject = <JSON> this.arrayObj;
    console.log(this.jsonObject);
    this.toggleEditableadduser();

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  //News
  toggleEditableaddn() {
    var adduser = document.getElementById('addnews') as HTMLInputElement;
     if(adduser.checked == true){
      this.acceptedaddnews = true;
      this.jsonObject[0]['acceptedaddnews'] = this.acceptedaddnews;
       sessionStorage.setItem('testaddnews', JSON.stringify(this.acceptedaddnews));//To be used on the branch component
     }else{
      this.acceptedaddnews = true;
      this.jsonObject[0]['acceptedaddnews'] = this.acceptedaddnews;
       sessionStorage.setItem('testaddnews', JSON.stringify(this.acceptedaddnews));//To be used on the branch component
     }

  }
  toggleEditabledeleten() {
    var deleteuser = document.getElementById('deletenews') as HTMLInputElement;
     if(deleteuser.checked == true){
      this.accepteddeletenews = true;
      this.jsonObject[0]['accepteddeletenews'] = this.accepteddeletenews;
       sessionStorage.setItem('testdeletenews', JSON.stringify(this.accepteddeletenews));//To be used on the branch component
     }else{
      this.acceptedaddnews = true;
      this.jsonObject[0]['accepteddeletenews'] = this.accepteddeletenews;
       sessionStorage.setItem('testdeletenews', JSON.stringify(this.accepteddeletenews));//To be used on the branch component
     }

  }

  //Add user page
  toggleEditableadduser(){
    var adduser = document.getElementById('adduser') as HTMLInputElement;
    sessionStorage.setItem('test', JSON.stringify(adduser.checked));

     if(adduser.checked == false){
      this.accepted = false;
      this.jsonObject[0]['accepted'] = this.accepted;
       console.log(this.accepted);
       console.log(this.jsonObject);
       sessionStorage.setItem('testusergroup', JSON.stringify(this.accepted));//To be used on the branch component
     }else{
      this.accepted = true;
      this.jsonObject[0]['accepted'] = this.accepted;
      // let changingone = this.arrayObj.accepted;
       console.log(this.accepted);
       console.log(this.jsonObject);

       sessionStorage.setItem('testusergroup', JSON.stringify(this.accepted));//To be used on the branch component
     }
   }

  savepermissions() {

    this.permservice.Savepermissons(this.jsonObject)
    .subscribe((results)=>{
    });
    console.log(this.jsonObject);

  }


}

