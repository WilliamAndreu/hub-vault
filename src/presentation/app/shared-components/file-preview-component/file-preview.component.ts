import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {  MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { ContentEntity } from '@models/content/content.entity';
import { HomeComponent } from '@views/home/view/home.component';
import { ClipBoardComponent } from "../clip-board-component/clip-board.component";
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { UtilsModule } from '@utils/utils.module';
import { FileTypeDetectorUtil } from '@utils/file-type-detector.util';

@Component({
  selector: "app-file-preview-component",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, ClipBoardComponent, NgxDocViewerModule, UtilsModule],
  templateUrl: "./file-preview.component.html",
  styleUrl: "./file-preview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePreviewComponentComponent {
  readonly dialogRef = inject(MatDialogRef<HomeComponent>);
  readonly data = inject<ContentEntity>(MAT_DIALOG_DATA);
  readonly content = model(this.data);
  readonly fileAnalyser = inject(FileTypeDetectorUtil)
  readonly fileType = this.fileAnalyser.detectFileType(this.content().download_url!); 
  public loading = signal(true);


  
  public changeLoadedState() {
    this.loading.set(false)
  }
}
