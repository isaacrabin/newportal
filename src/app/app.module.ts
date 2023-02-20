import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ToastrModule } from 'ngx-toastr';
import { ToastrModule } from "ngx-toastr";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
//import { MarkdownModule } from "ngx-markdown";
import { TreoModule } from "@treo";
import { TreoConfigModule } from "@treo/services/config";
import { TreoMockApiModule } from "@treo/lib/mock-api";
import { appConfig } from "app/core/config/app.config";
import { mockApiServices } from "app/mock-api";
import { LayoutModule } from "app/layout/layout.module";
import { AppComponent } from "app/app.component";
import { appRoutes } from "app/app.routing";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { SelfAdminPagesModule } from "./modules/self-admin-portal-pages/self-admin-pages.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AuthGuardGuard } from "_services/auth-guard.guard";
import { OnlyLoggedInUsersGuard } from "_services/onlyloggedInusersGuard.service";
import { AuthService } from "_services/auth.service";
import { CoreModule } from "./core/core.module";


const routerConfig: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: "legacy",
};

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes, routerConfig),

    // Treo & Treo Mock API
    TreoModule,
    TreoConfigModule.forRoot(appConfig),
    TreoMockApiModule.forRoot(mockApiServices),

    //CORE
    CoreModule,
    // Layout
    LayoutModule,
    HttpClientModule,
    // 3rd party modules
    //MarkdownModule.forRoot({}),
    // CountyModule,
    ReactiveFormsModule,

    FormsModule,
    NgApexchartsModule,
    
    SelfAdminPagesModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass:HashLocationStrategy,

    },
    
    AuthGuardGuard,
    AuthService,
    OnlyLoggedInUsersGuard,
  ],
})
export class AppModule {}
