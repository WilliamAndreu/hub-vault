import { Component } from '@angular/core';
import { HomeViewModel } from '../viewmodel/home.viewmodel';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private viewModel: HomeViewModel) { 

  }




}
