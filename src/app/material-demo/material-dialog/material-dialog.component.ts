import {Component, inject, model} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {DialogComponent} from './dialog/dialog.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

class MatDialogRef<T> {
}

@Component({
  selector: 'app-material-dialog',
  imports: [
    MatButton
  ],
  templateUrl: './material-dialog.component.html',
  styleUrl: './material-dialog.component.scss'
})
export class MaterialDialogComponent {
  protected readonly matDialog = inject(MatDialog);


  openDialog(): void {
    this.matDialog.open(DialogComponent);
  }
}
