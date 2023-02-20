import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-document-type",
  templateUrl: "./document-type.component.html",
  styleUrls: ["./document-type.component.scss"],
})
export class DocumentTypeComponent {
  document: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      options: any;
      title: string;
      cancelText: string;
      confirmText: string;
    },
    private mdDialogRef: MatDialogRef<DocumentTypeComponent>
  ) {}
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
  public confirm(document) {
    this.close(document);
  }
  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }
}
