import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { DocumentTypeComponent } from "../component/document-type/document-type.component";

@Injectable()
export class DocumentTypeService {
  constructor(private dialog: MatDialog) {}
  dialogRef: MatDialogRef<DocumentTypeComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(DocumentTypeComponent, {
      data: {
        title: options.title,
        options: options.options,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }
}
