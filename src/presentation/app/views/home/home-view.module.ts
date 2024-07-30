import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '@data/data.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@pipes/pipes.module';
import { HomeComponent } from './view/home.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewModel } from './viewmodel/home.viewmodel';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeViewRoutingModule,
    CommonModule,
    DataModule,
    FormsModule,
    PipesModule
    
  ],
  providers: [HomeViewModel],
})
export class HomeModule {}
