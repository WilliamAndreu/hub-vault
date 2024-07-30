import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
  {
    path: 'main',
    loadChildren: () =>
      import('./containers/main-container/main-container.module').then(
        (m) => m.MainContainerModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
