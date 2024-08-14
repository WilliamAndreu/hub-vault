import { Component, Input } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-clip-board',
  templateUrl: './clip-board.component.html',
  styleUrls: ['./clip-board.component.scss'], 
  standalone: true,
  providers: []
})
export class ClipBoardComponent {
  @Input() url = '';
  constructor(private clipboard: Clipboard, 
    private _snackBar: MatSnackBar) {}

  copyToClipboard() {
    const copyOperation= this.clipboard.copy(this.url);
      if(copyOperation){
        this._snackBar.open('Copied to clipboard', 'Close', {
          duration: 2000,
        });
      }else { 
        this._snackBar.open('Error copying to clipboard', 'Close', {
          duration: 2000,
        });
      }
    
  }
}
