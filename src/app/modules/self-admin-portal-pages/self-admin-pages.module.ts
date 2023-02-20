import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerProfilesComponent } from './customer-profiles/customer-profiles.component';
import { CustomersComponent } from './customers/customers.component';
import { CardsComponent } from './cards/cards.component';
import { CheckbooksComponent } from './checkbooks/checkbooks.component';
import { BranchesComponent } from './branches/branches.component';
import { NewsComponent } from './news/news.component';
import { GroupsComponent } from './groups/groups.component';
import { SharedModule } from './shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AddgroupsComponent } from './groups/addgroups/addgroups.component';
import { ViewcardsComponent } from './cards/viewcards/viewcards.component';
import { ViewcheckbookComponent } from './checkbooks/viewcheckbook/viewcheckbook.component';
import { ViewcustomersComponent } from './customers/viewcustomers/viewcustomers.component';
import { ViewprofileComponent } from './customer-profiles/viewprofile/viewprofile.component';
import { AddnewsComponent } from './news/addnews/addnews.component';
import { ViewgroupsComponent } from './groups/viewgroups/viewgroups.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './table/dialog/dialog.component';
import { FilterdateComponent } from './dashboard/filterdate/filterdate.component';
import { LogsComponent } from './logs/logs.component';
import { SuccessfulComponent } from './customer-profiles/messages/successful/successful.component';
import { ErrorComponent } from './customer-profiles/messages/error/error.component';
import { DateprofilesComponent } from "./dashboard/dialogs/datefilter/dateprofiles/dateprofiles.component";
import { DatecardsComponent } from "./dashboard/dialogs/datefilter/datecards/datecards.component";
import { DatealertsComponent } from "./dashboard/dialogs/datefilter/datealerts/datealerts.component";
import { DatecustomersComponent } from "./dashboard/dialogs/datefilter/datecustomers/datecustomers.component";
import { DatecheckbookComponent } from "./dashboard/dialogs/datefilter/datecheckbook/datecheckbook.component";
import { DatesstandingorderComponent } from "./dashboard/dialogs/datefilter/datesstandingorder/datesstandingorder.component";
import { DatebarComponent } from "./dashboard/dialogs/datefilter/datebar/datebar.component";
import { DatelineComponent } from "./dashboard/dialogs/datefilter/dateline/dateline.component";
import { DatebartwoComponent } from "./dashboard/dialogs/datefilter/datebartwo/datebartwo.component";
import { DatepieComponent } from "./dashboard/dialogs/datefilter/datepie/datepie.component";
import { MonthlyprofilesComponent } from "./dashboard/dialogs/monthfilter/monthlyprofiles/monthlyprofiles.component";
import { MonthlycardsComponent } from "./dashboard/dialogs/monthfilter/monthlycards/monthlycards.component";
import { MonthlyalertsComponent } from "./dashboard/dialogs/monthfilter/monthlyalerts/monthlyalerts.component";
import { MonthlycustomersComponent } from "./dashboard/dialogs/monthfilter/monthlycustomers/monthlycustomers.component";
import { MonthlycheckbookComponent } from "./dashboard/dialogs/monthfilter/monthlycheckbook/monthlycheckbook.component";
import { MonthlystandingorderComponent } from "./dashboard/dialogs/monthfilter/monthlystandingorder/monthlystandingorder.component";
import { MonthlybarComponent } from "./dashboard/dialogs/monthfilter/monthlybar/monthlybar.component";
import { MonthlineComponent } from "./dashboard/dialogs/monthfilter/monthline/monthline.component";
import { MonthbartwoComponent } from "./dashboard/dialogs/monthfilter/monthbartwo/monthbartwo.component";
import { MonthpieComponent } from "./dashboard/dialogs/monthfilter/monthpie/monthpie.component";
import { YearprofilesComponent } from "./dashboard/dialogs/yearfilter/yearprofiles/yearprofiles.component";
import { YearcardsComponent } from "./dashboard/dialogs/yearfilter/yearcards/yearcards.component";
import { YearalertsComponent } from "./dashboard/dialogs/yearfilter/yearalerts/yearalerts.component";
import { YearcustomersComponent } from "./dashboard/dialogs/yearfilter/yearcustomers/yearcustomers.component";
import { YearcheckbookComponent } from "./dashboard/dialogs/yearfilter/yearcheckbook/yearcheckbook.component";
import { YearlystandingorderComponent } from "./dashboard/dialogs/yearfilter/yearlystandingorder/yearlystandingorder.component";
import { YearbarComponent } from "./dashboard/dialogs/yearfilter/yearbar/yearbar.component";
import { YearlineComponent } from "./dashboard/dialogs/yearfilter/yearline/yearline.component";
import { YearbartwoComponent } from "./dashboard/dialogs/yearfilter/yearbartwo/yearbartwo.component";
import { YearpieComponent } from "./dashboard/dialogs/yearfilter/yearpie/yearpie.component";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DeleteComponent } from './groups/delete/delete.component';
import { MarkercheckerComponent } from './customer-profiles/markerchecker/markerchecker.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerProfilesComponent,
    CustomersComponent,
    CardsComponent,
    CheckbooksComponent,
    BranchesComponent,
    NewsComponent,
    GroupsComponent,
    BranchesComponent,
    AddgroupsComponent,
    ViewcardsComponent,
    ViewcheckbookComponent,
    ViewcustomersComponent,
    ViewprofileComponent,
    AddnewsComponent,
    ViewgroupsComponent,
    ViewgroupsComponent,
    TableComponent,
    DialogComponent,
    FilterdateComponent,
    LogsComponent,
    SuccessfulComponent,
    ErrorComponent,
    DateprofilesComponent,
    DatecardsComponent,
    DatealertsComponent,
    DatecustomersComponent,
    DatecheckbookComponent,
    DatesstandingorderComponent,
    DatebarComponent,
    DatelineComponent,
    DatebartwoComponent,
    DatepieComponent,
    DatelineComponent,
    MonthlyprofilesComponent,
    MonthlycardsComponent,
    MonthlyalertsComponent,
    MonthlycustomersComponent,
    MonthlycheckbookComponent,
    MonthlystandingorderComponent,
    MonthlybarComponent,
    MonthlineComponent,
    MonthbartwoComponent,
    MonthpieComponent,
    MonthlineComponent,
    YearprofilesComponent,
    YearcardsComponent,
    YearalertsComponent,
    YearcustomersComponent,
    YearcheckbookComponent,
    YearlystandingorderComponent,
    YearbarComponent,
    YearbartwoComponent,
    YearpieComponent,
    YearlineComponent,
    DeleteComponent,
    ViewgroupsComponent,
    MarkercheckerComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profiles', component: CustomerProfilesComponent },
      { path: 'customers',component: CustomersComponent },
      { path: 'orderedcards', component: CardsComponent },
      { path: 'orderedcheckbooks',component: CheckbooksComponent },
      { path: 'branches', component: BranchesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'addgroup', component: AddgroupsComponent },
      { path: 'addnews', component: AddnewsComponent},
      { path: 'viewgroup', component: ViewgroupsComponent },
      { path: 'viewcards',  component: ViewcardsComponent },
      { path: 'viewcheckbook', component: ViewcheckbookComponent },
      { path: 'viewcustomers', component: ViewcustomersComponent },
      { path: 'viewprofile', component: ViewprofileComponent },
      { path: 'table', component: TableComponent },
      { path: 'dialog', component: DialogComponent },
      {path: 'filterdialog', component: FilterdateComponent},
      {path: 'customerslogs', component: LogsComponent}

    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,  // this is the version without moment.js
  ],
  entryComponents: [
    AddgroupsComponent,
    ViewcardsComponent,
    ViewcheckbookComponent,
    ViewcustomersComponent,
    ViewprofileComponent,
    AddnewsComponent,
    ViewgroupsComponent,
    ViewgroupsComponent,
    
  ],
})
export class SelfAdminPagesModule { }
