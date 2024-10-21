import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, model, signal } from '@angular/core';
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
})
export class FilePreviewComponent{
  readonly bottomSheetRef = inject(MatBottomSheetRef<FilePreviewComponent>);
  readonly data = inject<ContentEntity>(MAT_BOTTOM_SHEET_DATA);
  readonly content = model(this.data);
  readonly fileAnalyzer = inject(FileTypeDetectorUtil);
  readonly fileType = this.fileAnalyzer.detectFileType(this.content().download_url!);

  public loading = signal(true);

  private startY = 0;
  private currentY = 0;
  private threshold = 100;

  public changeLoadedState() {
    this.loading.set(false);
  }

  @HostListener('touchstart', ['$event'])
  public onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
  }

  @HostListener('touchmove', ['$event'])
  public onTouchMove(event: TouchEvent) {
    this.currentY = event.touches[0].clientY;

    const dragDistance = this.currentY - this.startY;

    if (dragDistance > 1) {
      const translateY = Math.min(dragDistance, this.threshold * 1.5);
      const bottomSheetElement = document.querySelector('.mat-bottom-sheet-container') as HTMLElement;

      if (bottomSheetElement) {
        bottomSheetElement.style.transform = `translateY(${translateY}px)`;
      }
    }
  }

  @HostListener('touchend', ['$event'])
  public onTouchEnd(event: TouchEvent) {
    const dragDistance = this.currentY - this.startY;

    if (dragDistance >= this.threshold) {
      //TODO fix dismiss animation
      const bottomSheetElement = document.querySelector('.mat-bottom-sheet-container') as HTMLElement;
      if (bottomSheetElement) {
        bottomSheetElement.style.transform = `translateY(${bottomSheetElement.clientHeight + 100}px)`;
        bottomSheetElement.style.transformStyle = 'flat';
        bottomSheetElement.style.transition = 'transform 0.3s ease-in-out';
        if (this.fileType === 'doc' || this.fileType === 'misc') this.loading.set(true);
        setTimeout(() => {
          bottomSheetElement.style.visibility = 'hidden';
          this.bottomSheetRef.dismiss();
        }, 300);
      }
    } else {
      const bottomSheetElement = document.querySelector('.mat-bottom-sheet-container') as HTMLElement;
      if (bottomSheetElement) {
        bottomSheetElement.style.transform = `translateY(0px)`;
      }
    }

    this.startY = 0;
    this.currentY = 0;
  }
}
