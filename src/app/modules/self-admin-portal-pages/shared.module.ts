import { NgModule } from "@angular/core";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule, MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgSelectModule } from "@ng-select/ng-select";
import { TreoAlertModule } from "@treo/components/alert";
import { TreoNavigationModule } from "@treo/components/navigation";
import { TreoAutogrowModule } from "@treo/directives/autogrow";
import { BreadcrumbMenuModule } from "app/layout/common/breadcrumb-menu/breadcrumb-menu.module";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

const matImports = [
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    TreoNavigationModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSortModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatMenuModule,
    BreadcrumbMenuModule,
    MatRippleModule,
    NgSelectModule,
    TreoAlertModule,
    TreoAutogrowModule,
    MatGridListModule,
    MatTabsModule
];

@NgModule({
    declarations: [],
    imports: matImports,
    exports: matImports,
    providers: [],
})


export class SharedModule { }