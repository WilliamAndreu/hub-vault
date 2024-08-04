import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from '@data/data.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@pipes/pipes.module';
import { MainContainerComponent } from './view/main-container.component';
import { MainContainerViewRoutingModule } from './main-container-routing.module';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatRippleModule} from '@angular/material/core';



@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    MainContainerViewRoutingModule,
    CommonModule,
    DataModule,
    FormsModule,
    PipesModule,
    MatButton,
    MatNavList,
    MatToolbar,
    MatIconButton,
    MatListItem,
    MatIcon,
    MatSidenavModule,
    MatRippleModule
  ]
})
export class MainContainerModule {}
