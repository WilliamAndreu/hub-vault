import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clip-board',
  templateUrl: './clip-board.component.html',
  styleUrls: ['./clip-board.component.scss'], 
  standalone: true,
  providers: []
})
export class ClipBoardComponent {
  @Input() url = '';
}
