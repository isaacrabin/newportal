import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BreadcrumbMenuComponent } from './breadcrumb-menu.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BreadcrumbMenuComponent],
  imports: [
    MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        RouterModule,
        SharedModule
  ],
  exports     : [
    BreadcrumbMenuComponent
  ]
})
export class BreadcrumbMenuModule { }
