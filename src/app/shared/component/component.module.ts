import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserModule } from "@angular/platform-browser";
import { ConfirmDialogService } from "../service/confirm_dialog_service";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DocumentTypeComponent } from "./document-type/document-type.component";

@NgModule({
  declarations: [ConfirmDialogComponent, DocumentTypeComponent],
  imports: [MatButtonModule, MatDialogModule, MatRadioModule, CommonModule, FormsModule, MatIconModule],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [ConfirmDialogService],
})
export class ComponentModule { }
