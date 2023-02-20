import { Component, OnInit, Inject } from '@angular/core';
import { GroupsService } from '_services/groups.service';
import { result } from 'lodash';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  selectedId;

  constructor(
    private groupservice : GroupsService,
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  deletegroup() {
    this.groupservice.deleteGroupData(this.data.name,this.data).subscribe(result=>{

    })
    }

}
