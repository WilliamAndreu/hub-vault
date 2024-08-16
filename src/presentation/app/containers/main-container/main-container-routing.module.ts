import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainContainerComponent } from "./view/main-container.component";

const routes: Routes = [
  {
    path: "",
    component: MainContainerComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("../../views/home/home-view.module").then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContainerViewRoutingModule {}
