import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '@data/data.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@pipes/pipes.module';
import { HomeComponent } from './view/home.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewModel } from './viewmodel/home.viewmodel';





import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';




import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeViewRoutingModule,
    CommonModule,
    DataModule,
    FormsModule,
    PipesModule,

    MatDividerModule,
    MatIconModule,
    DatePipe,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTreeModule,
    MatRippleModule

    
  ],
  providers: [HomeViewModel],
})
export class HomeModule {}
