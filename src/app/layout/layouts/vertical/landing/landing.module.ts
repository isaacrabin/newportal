import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { TreoNavigationModule } from "@treo/components/navigation";
import { MessagesModule } from "app/layout/common/messages/messages.module";
import { NotificationsModule } from "app/layout/common/notifications/notifications.module";
import { SearchModule } from "app/layout/common/search/search.module";
import { ShortcutsModule } from "app/layout/common/shortcuts/shortcuts.module";
import { UserMenuModule } from "app/layout/common/user-menu/user-menu.module";
import { SharedModule } from "app/shared/shared.module";
import { LandingLayoutComponent } from "app/layout/layouts/vertical/landing/landing.component";

@NgModule({
  declarations: [LandingLayoutComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    TreoNavigationModule,
    MessagesModule,
    NotificationsModule,
    SearchModule,
    ShortcutsModule,
    UserMenuModule,
    SharedModule,
  ],
  exports: [LandingLayoutComponent],
})
export class LandingLayoutModule {}
