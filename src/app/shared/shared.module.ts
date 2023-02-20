import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectFormFieldControlDirective } from "./directives/ng-select.directive";
import { MarkAsteriskDirective } from "./directives/mark-asterisk.directive";

const directives = [NgSelectFormFieldControlDirective, MarkAsteriskDirective];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [directives],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, directives],
})
export class SharedModule { }
