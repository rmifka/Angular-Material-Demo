import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-material-cards',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './material-cards.component.html',
  styleUrl: './material-cards.component.scss'
})
export class MaterialCardsComponent {

}
