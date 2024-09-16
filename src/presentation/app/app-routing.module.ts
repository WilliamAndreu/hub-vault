import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { PublicAuthGuard } from '@guards/public-auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "main",
    loadChildren: () => import("./containers/main-container/main-container.module").then((m) => m.MainContainerModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () => import("./views/login/login-view.module").then((m) => m.LoginModule),
    canActivate: [PublicAuthGuard],
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
