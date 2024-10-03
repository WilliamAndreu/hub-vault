import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { ContentEntity } from '@models/content/content.entity';
import { ClipBoardComponent } from "../clip-board-component/clip-board.component";
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { UtilsModule } from '@utils/utils.module';
import { FileTypeDetectorUtil } from '@utils/file-type-detector.util';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: "app-file-preview-component",
  standalone: true,
  imports: [CommonModule, ClipBoardComponent, NgxDocViewerModule, UtilsModule, NgxSkeletonLoaderModule, MatListModule],
  templateUrl: "./file-preview.component.html",
  styleUrl: "./file-preview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilePreviewComponentComponent {
  readonly bottomSheetRef = inject(MatBottomSheetRef<FilePreviewComponentComponent>);
  readonly data = inject<ContentEntity>(MAT_BOTTOM_SHEET_DATA);
  readonly content = model(this.data);
  readonly fileAnalyzer = inject(FileTypeDetectorUtil);
  readonly fileType = this.fileAnalyzer.detectFileType(this.content().download_url!);
  public loading = signal(true);

  public changeLoadedState() {
    this.loading.set(false);
  }
}
