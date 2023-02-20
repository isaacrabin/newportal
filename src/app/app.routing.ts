import { RouterModule, Route } from "@angular/router";
import { LayoutComponent } from "app/layout/layout.component";
import { InitialDataResolver } from "app/app.resolvers";
import { OnlyLoggedInUsersGuard } from "_services/onlyloggedInusersGuard.service";
import { AuthGuardService } from "_services/auth-guards/auth-guard.service";
import { AuthGuardGuard } from "_services/auth-guard.guard";
import { NgModule } from '@angular/core';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: "", pathMatch: "full", redirectTo: "sign-in" },

  // Redirect signed in user to the '/example'
  { path: "signed-in-redirect", pathMatch: "full", redirectTo: "bank" },

  // Auth routes (guest)
  {
    path: "",
    component: LayoutComponent,
    data: {
      layout: "empty",
    },
    children: [
     
      {
        path: "sign-in",
        loadChildren: () => import("app/modules/auth/sign-in/sign-in.module").then((m) => m.AuthSignInModule),
      },
    
     
    ],
  },

  // Auth routes (logged in)
  {
    path: "",
    component: LayoutComponent,
    data: {
      layout: "empty",
    },
    children: [
      {
        path: "sign-out",
        loadChildren: () => import("app/modules/auth/sign-out/sign-out.module").then((m) => m.AuthSignOutModule),
      },
     
    ],
  },
  
  {
    path: "bank",
    canActivate: [
      AuthGuardGuard,
      OnlyLoggedInUsersGuard
    ],
    data: {
      breadcrumb: "Bank Administration",
    },
    children: [
      //Bank Admin Routes
      {
        path: "",
        component: LayoutComponent,
        data: {
          layout: "classic",
          navigator: "bank_admin",
        },
        resolve: {
          initialData: InitialDataResolver,
        },
        children: [
          {
            path: "admin",
            data: {
              breadcrumb: "Admin",
            },
            loadChildren: () => import("app/modules/self-admin-portal-pages/self-admin-pages.module").then((m) => m.SelfAdminPagesModule),
          },
        ],
      },

    ],
  },
  


];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule],
//   providers: [
//     AuthGuardGuard,
//     OnlyLoggedInUsersGuard,
//   ],
// })
//export class AppRoutingModule { }