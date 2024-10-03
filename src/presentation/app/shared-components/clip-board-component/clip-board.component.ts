import { Component, Input, inject } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: "app-clip-board",
  templateUrl: "./clip-board.component.html",
  styleUrls: ["./clip-board.component.scss"],
  standalone: true,
  providers: [],
})
export class ClipBoardComponent {
  private _snackBar = inject(MatSnackBar);
  private clipboard = inject(Clipboard);
  @Input() url = "";
  @Input() urlName = "";
  @Input() expand = false;

  copyToClipboard() {
    const copyOperation = this.clipboard.copy(this.url);
    if (copyOperation) {
      const beginingText = this.urlName.length > 0 ? this.urlName + " c" : "C";
      this._snackBar.open(beginingText + "opied to clipboard", "Close", {
        duration: 2000,
      });
    } else {
      this._snackBar.open("Error copying to clipboard", "Close", {
        duration: 2000,
      });
    }
  }
}
