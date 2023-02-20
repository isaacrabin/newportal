import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { result } from 'lodash';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from "ng-apexcharts";
import { AlertService } from '_services/others/alert.service';
import { CustomerService } from '_services/customer.service';
import { DashboardService } from '_services/dashboard.service';
import { OrderedCheckbookService } from '_services/ordered-checkbook.service';
import { OrderedDebitService } from '_services/ordered-debit.service';
import { ProfileService } from '_services/profile.service';
import { StandingorderService } from '_services/standingorder.service';
import { DatealertsComponent } from './dialogs/datefilter/datealerts/datealerts.component';
import { DatebarComponent } from './dialogs/datefilter/datebar/datebar.component';
import { DatebartwoComponent } from './dialogs/datefilter/datebartwo/datebartwo.component';
import { DatecardsComponent } from './dialogs/datefilter/datecards/datecards.component';
import { DatecheckbookComponent } from './dialogs/datefilter/datecheckbook/datecheckbook.component';
import { DatecustomersComponent } from './dialogs/datefilter/datecustomers/datecustomers.component';
import { DatelineComponent } from './dialogs/datefilter/dateline/dateline.component';
import { DatepieComponent } from './dialogs/datefilter/datepie/datepie.component';
import { DateprofilesComponent } from './dialogs/datefilter/dateprofiles/dateprofiles.component';
import { DatesstandingorderComponent } from './dialogs/datefilter/datesstandingorder/datesstandingorder.component';
import { MonthbartwoComponent } from './dialogs/monthfilter/monthbartwo/monthbartwo.component';
import { MonthlineComponent } from './dialogs/monthfilter/monthline/monthline.component';
import { MonthlyalertsComponent } from './dialogs/monthfilter/monthlyalerts/monthlyalerts.component';
import { MonthlybarComponent } from './dialogs/monthfilter/monthlybar/monthlybar.component';
import { MonthlycardsComponent } from './dialogs/monthfilter/monthlycards/monthlycards.component';
import { MonthlycheckbookComponent } from './dialogs/monthfilter/monthlycheckbook/monthlycheckbook.component';
import { MonthlycustomersComponent } from './dialogs/monthfilter/monthlycustomers/monthlycustomers.component';
import { MonthlyprofilesComponent } from './dialogs/monthfilter/monthlyprofiles/monthlyprofiles.component';
import { MonthlystandingorderComponent } from './dialogs/monthfilter/monthlystandingorder/monthlystandingorder.component';
import { MonthpieComponent } from './dialogs/monthfilter/monthpie/monthpie.component';
import { YearalertsComponent } from './dialogs/yearfilter/yearalerts/yearalerts.component';
import { YearbarComponent } from './dialogs/yearfilter/yearbar/yearbar.component';
import { YearbartwoComponent } from './dialogs/yearfilter/yearbartwo/yearbartwo.component';
import { YearcardsComponent } from './dialogs/yearfilter/yearcards/yearcards.component';
import { YearcheckbookComponent } from './dialogs/yearfilter/yearcheckbook/yearcheckbook.component';
import { YearcustomersComponent } from './dialogs/yearfilter/yearcustomers/yearcustomers.component';
import { YearlineComponent } from './dialogs/yearfilter/yearline/yearline.component';
import { YearlystandingorderComponent } from './dialogs/yearfilter/yearlystandingorder/yearlystandingorder.component';
import { YearpieComponent } from './dialogs/yearfilter/yearpie/yearpie.component';
import { YearprofilesComponent } from './dialogs/yearfilter/yearprofiles/yearprofiles.component';
import { FilterdateComponent } from './filterdate/filterdate.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  //fill: ApexFill;
  colors : string [];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
export type ChartOptionstwo = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  colors : string [];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
export type ChartOptionspie = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors : string [];
  //colors: ApexFill;
};
export type ChartOptionsline = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors : string [];
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  range: string;

  @ViewChild("chartbar") chart: ChartComponent;
  public chartOptionsbar: Partial<ChartOptions>;
  @ViewChild("chartbartwo") charttwo: ChartComponent;
  public chartOptionsbartwo: Partial<ChartOptionstwo>;
  @ViewChild("chartpie") chartpie: ChartComponent;
  public chartOptionspie: Partial<ChartOptionspie>;
  @ViewChild("chartline") chartline: ChartComponent;
  public chartOptionsline: Partial<ChartOptionsline>;

  //Total variables
  totalAccounts = 0;
  totalCard = 0;
  totalProfile = 0;
  totalCheckbook = 0;
  totalwidth = 0;
  totalStandingOrder = 0;
  totalAlerts = 0;
  progressaccount : number = 0;
  progressprofiles : number = 0;
  progresscards: number = 0;
  progresscheckbooks : number = 0;
  //Filter results
  datamline: any;
  datayline: any;
  datadline: any;
  datampie: any;
  dataypie: any;
  datadpie: any;
  datambt: any;
  dataybt: any;
  datadbt: any;
  datamb: any;
  datayb: any;
  datadb: any;
  datamso: any;
  datayso: any;
  datadso: any;
  datamc: any;
  datayc: any;
  datadc: any;
  datamcu: any;
  dataycu: any;
  datadcu: any;
  datama: any;
  dataya: any;
  datada: any;
  datamcards: any;
  dataycards: any;
  datadcards: any;
  datamprofiles: any;
  datayprofiles: any;
  datadprofiles: any;

  constructor(
    private service: DashboardService,
    private profileService : ProfileService,
    private standingOrderService : StandingorderService,
    private alertsService : AlertService,
    private cardsService : OrderedDebitService,
    private checkbookService : OrderedCheckbookService,
    private customersService : CustomerService,
    public dialog: MatDialog,
  ) {
    this.chartOptionsbar = {
      // colors: ["#0033a1", "#ff9933"],
      series: [
        {
          name: "Checkbooks",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 20, 65, 56],

        },
        {
          name: "Cards",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 30, 50, 67]
        },
        
      ],
      chart: {
        type: "bar",
        height: 350,

      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false,
        style:{
          colors: ['#0033a1', '#ff9933']
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        
      },
      yaxis: {
        title: {
          text: "Number of accounts"
        }
      },
      colors: ["#0033a1", "#ff9933"],
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Total ";
          }
        }
      },
      
      
    };
    this.chartOptionsbartwo = {
      series: [
        {
          name: "Amended",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 40, 30]
        },
        {
          name: "Stopped",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 50, 30, 60]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false,
        style:{
          colors: ['#0033a1', '#ff9933']
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ]
      },
      yaxis: {
        title: {
          text: "Number of accounts"
        }
      },
      fill: {
        opacity: 1,
        colors: ['#0033a1', '#ff9933']
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Total ";
          }
        }
      },
    };
    this.chartOptionspie = {
      series: [25, 75],
      
      chart: {
        type: "donut",
        toolbar:{
          show: true
        }
      },
      labels: ["Fraud", "Others"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom",
              
            }
          }
        }
      ],
      colors: ["#0033a1", "#ff9933"],
    };
    this.chartOptionsline = {
      series: [
        {
          name: "Individual",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ['#0033a1']
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      colors: ["#0033a1", "#ff9933"],
    };
  }
  ngOnInit(): void {
    this.gettotalAccounts();
    this.gettotalCards();
    this.gettotalCheckbooks();
    this.gettotalProfile();
    this.getTotalpercentange();
    

  }
  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  //FilterDates
  openDialogdateCPU() {
    const dialogRef = this.dialog.open(FilterdateComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.range = result;
      console.log(result)
    });

  }
  //Export
  

 
//Totals
  gettotalProfile(){
    this.service.getTotalProfiles().subscribe((response: any) => {
      //console.log(response);
       this.totalProfile = response;
       this.progressprofiles = 100/this.totalProfile;
       
    });
  }
  gettotalCards(){
    this.service.getTotalCards().subscribe((response: any) => {
      //console.log(response);
       this.totalCard = response;
       this.progresscards = 100/this.totalCard;
    })
  }
  gettotalCheckbooks(){
    this.service.getTotalCheckbooks().subscribe((response: any) => {
      //console.log(response);
       this.totalCheckbook = response;
       //this.totalwidth = this.totalAccounts + this.totalCard + this.totalProfile + this.totalCheckbook;
       this.progresscheckbooks = 100/this.totalCheckbook;

    })
  }
  getTotalpercentange(){
    var totalwidth = this.totalAccounts + this.totalCard + this.totalProfile + this.totalCheckbook;

    //console.log(this.totalAccounts);
  }

  gettotalAccounts(){
    this.service.getTotalAccounts().subscribe((response: any) => {
      // console.log(response);
       this.totalAccounts = response;
       //const width = this.progressaccount;

       this.progressaccount = 100/this.totalAccounts;


       //console.log(this.progressaccount);
    });
  }
  gettotalAlerts(){
    this.service.getTotalAlerts().subscribe((response: any) => {
      // console.log(response);
       this.totalAlerts = response;
       //const width = this.progressaccount;

       this.progressaccount = 100/this.totalAlerts;


       //console.log(this.progressaccount);
    });
  }
  gettotalStandingOrder(){
    this.service.getTotalStandingOrder().subscribe((response: any) => {
       this.totalStandingOrder = response;      

       this.progressaccount = 100/this.totalStandingOrder;


       //console.log(this.progressaccount);
    });
  }


//Filters
openDialogMonthlylineCPU() {
  const dialogRef = this.dialog.open(MonthlineComponent, {
    data: {range: this.range},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.datamline = result;
    console.log(result)
  });
  }
  openDialogyearlylineCPU() {
    const dialogRef = this.dialog.open(YearlineComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datayline = result;
      console.log(result)
    });
  }
  openDialogdatelineCPU() {
    const dialogRef = this.dialog.open(DatelineComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadline = result;
      console.log(result)
    });
    
  }
  openDialogMonthlypieCPU() {
    const dialogRef = this.dialog.open(MonthpieComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datampie = result;
      console.log(result)
    });
  }
  openDialogyearlypieCPU() {
    const dialogRef = this.dialog.open(YearpieComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataypie = result;
      console.log(result)
    });
  }
  openDialogdatepieCPU() {
    const dialogRef = this.dialog.open(DatepieComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadpie = result;
      console.log(result)
    });
  }
  openDialogMonthlybartwoCPU() {
    const dialogRef = this.dialog.open(MonthbartwoComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datambt = result;
      console.log(result)
    });
  }
  openDialogyearlybartwoCPU() {
    const dialogRef = this.dialog.open(YearbartwoComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataybt = result;
      console.log(result)
    });
  }
  openDialogdatebartwoCPU() {
    const dialogRef = this.dialog.open(DatebartwoComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadbt = result;
      console.log(result)
    });
  }
  openDialogMonthlybarCPU() {
    const dialogRef = this.dialog.open(MonthlybarComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamb = result;
      console.log(result)
    });
  }
  openDialogyearlybarCPU() {
    const dialogRef = this.dialog.open(YearbarComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datayb = result;
      console.log(result)
    });
  }
  openDialogdatebarCPU() {
    const dialogRef = this.dialog.open(DatebarComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadb = result;
      console.log(result)
    });
  }


  openDialogMonthlysoCPU() {
    const dialogRef = this.dialog.open(MonthlystandingorderComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamso = result;
      console.log(result)
    });
    this.standingOrderService.getFiltermonthly(this.datamso).subscribe((result: any)=>{
      this.totalStandingOrder = result;
    })
  }
  openDialogyearlysoCPU() {
    const dialogRef = this.dialog.open(YearlystandingorderComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datayso = result;
      console.log(result)
    });
    this.standingOrderService.getFilteryearly(this.datayso).subscribe((result: any)=>{
      this.totalStandingOrder = result;
    })
  }
  openDialogdatesoCPU() {
    const dialogRef = this.dialog.open(DatesstandingorderComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadso = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.standingOrderService.getFilterbetweendates(payloadstart,payloadend).subscribe((result: any)=>{
        this.totalStandingOrder = result;
        
      })
    });
    
  }


  openDialogMonthlycheckbooksCPU() {
    const dialogRef = this.dialog.open(MonthlycheckbookComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamc = result;
      console.log(result)
    });
    this.checkbookService.getFiltermonthly(this.datamc).subscribe((result: any)=>{
      this.totalCheckbook = result;
    })
  }
  openDialogyearlycheckbooksCPU() {
    const dialogRef = this.dialog.open(YearcheckbookComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datayc = result;
      console.log(result)
    });
    this.checkbookService.getFilteryearly(this.datayc).subscribe((result: any)=>{
      this.totalCheckbook = result;
    })
  }
  openDialogdatecheckbooksCPU() {
    const dialogRef = this.dialog.open(DatecheckbookComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadc = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.checkbookService.getFilterbetweendates(payloadstart,payloadend).subscribe((result: any)=>{
        this.totalCheckbook = result;
      })
    });
    
  }


  openDialogMonthlycustomersCPU() {
    const dialogRef = this.dialog.open(MonthlycustomersComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamcu = result;
      console.log(result)
    });
    this.customersService.getFiltermonthly(this.datamcu).subscribe((result: any)=>{
      this.totalAccounts = result;
    })
  }
  openDialogyearlycustomersCPU() {
    const dialogRef = this.dialog.open(YearcustomersComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataycu = result;
      console.log(result)
    });
    this.customersService.getFilteryearly(this.dataycu).subscribe((result: any)=>{
      this.totalAccounts = result;
    })
  }
  openDialogdatecustomersCPU() {
    const dialogRef = this.dialog.open(DatecustomersComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadcu = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.customersService.getFilterbetweendates(payloadstart,payloadend).subscribe((result: any)=>{
        this.totalAccounts = result;
      })
    });
    
  }


  openDialogMonthlyalertsCPU() {
    const dialogRef = this.dialog.open(MonthlyalertsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datama = result;
      console.log(result)
    });
    this.alertsService.getFiltermonthly(this.datama).subscribe((result: any)=>{
      this.totalAlerts = result;
    })
  }
  openDialogyearlyalertsCPU() {
    const dialogRef = this.dialog.open(YearalertsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataya = result;
      console.log(result)
    });
    this.alertsService.getFilteryearly(this.dataya).subscribe((result: any)=>{
      this.totalAlerts = result;
    })
  }
  openDialogdatealertsCPU() {
    const dialogRef = this.dialog.open(DatealertsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datada = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.alertsService.getFilterbetweendates(payloadstart,payloadend).subscribe((result: any)=>{
        this.totalAlerts = result;
      })
    });
    
  }


  openDialogMonthlycardsCPU() {
    const dialogRef = this.dialog.open(MonthlycardsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamcards = result;
      console.log(result)
    });
    this.cardsService.getFiltermonthly(this.datamcards).subscribe((result: any)=>{
      this.totalCard = result;
    })
  }
  openDialogyearlycardsCPU() {
    const dialogRef = this.dialog.open(YearcardsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataycards = result;
      console.log(result)
    });
    this.cardsService.getFilteryearly(this.dataycards).subscribe((result: any)=>{
      this.totalCard= result;
    })
  }
  openDialogdatecardsCPU() {
    const dialogRef = this.dialog.open(DatecardsComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadcards = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.cardsService.getFilterbetweendates(payloadstart,payloadend).subscribe((result: any)=>{
        this.totalCard = result;
      })
    });
    
  }
  
  openDialogMonthlyprofilesCPU() {
    const dialogRef = this.dialog.open(MonthlyprofilesComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datamprofiles = result;
      console.log(result)
    });
    this.profileService.getFiltermonthly(this.datadprofiles).subscribe((result: any)=>{
      this.totalProfile = result;
    })
  }
  openDialogyearlyprofilesCPU() {
    const dialogRef = this.dialog.open(YearprofilesComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datayprofiles = result;
      console.log(result)
    });
    this.profileService.getFilteryearly(this.datadprofiles).subscribe((result: any)=>{
      this.totalProfile = result;
    })

  }
  openDialogdateprofilesCPU() {
    const dialogRef = this.dialog.open(DateprofilesComponent, {
      data: {range: this.range},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.datadprofiles = result;
      console.log(result)
      const payloadstart = result.startdate+'-'+result.startmonth+'-'+result.startyear;
      const payloadend = result.enddate+'-'+result.endmonth+'-'+result.endyear;
      this.profileService.getFilterbetweendates(payloadstart,payloadend,).subscribe((result: any)=>{
        this.totalProfile = result;
      })

    });
    
  }

}