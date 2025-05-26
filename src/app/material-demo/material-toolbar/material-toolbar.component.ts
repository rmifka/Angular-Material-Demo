import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-material-toolbar',
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './material-toolbar.component.html',
  styleUrl: './material-toolbar.component.scss'
})
export class MaterialToolbarComponent {

}
