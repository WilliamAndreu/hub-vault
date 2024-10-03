import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '@data/data.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '@pipes/pipes.module';
import { HomeComponent } from './view/home.component';
import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewModel } from './viewmodel/home.viewmodel';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {ClipBoardComponent } from '../../shared-components/clip-board-component/clip-board.component';
import {BreadCrumbComponent } from "../../shared-components/breadCrumb/breadCrumb.component";
import {HttpClientModule } from '@angular/common/http';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';
import {MatMenuModule} from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeViewRoutingModule,
    CommonModule,
    
    FormsModule,
    PipesModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTreeModule,
    MatRippleModule,
    ClipBoardComponent,
    BreadCrumbComponent,
    HttpClientModule,
    DropzoneCdkModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatBottomSheetModule,

  ],
  providers: [HomeViewModel],
})
export class HomeModule {}
