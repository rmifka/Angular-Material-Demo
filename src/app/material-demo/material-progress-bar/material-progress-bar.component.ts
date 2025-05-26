import { Component } from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-material-progress-bar',
  imports: [
    MatProgressBar,
    MatProgressSpinner
  ],
  templateUrl: './material-progress-bar.component.html',
  styleUrl: './material-progress-bar.component.scss'
})
export class MaterialProgressBarComponent {

}
