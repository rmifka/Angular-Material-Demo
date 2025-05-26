import { Component } from '@angular/core';
import {MaterialTableComponent} from './material-table/material-table.component';
import {TableWithPaginationComponent} from './material-table-with-pagination/material-table-with-pagination.component';
import {
  MaterialTableWithExpandableRowsComponent
} from './material-table-with-expandable-rows/material-table-with-expandable-rows.component';
import {MaterialProgressBarComponent} from './material-progress-bar/material-progress-bar.component';
import {MaterialCardsComponent} from './material-cards/material-cards.component';
import {MaterialDialogComponent} from './material-dialog/material-dialog.component';
import {MaterialFormComponent} from './material-form/material-form.component';
import {MatDivider} from '@angular/material/divider';
import {MaterialToolbarComponent} from './material-toolbar/material-toolbar.component';
import {MaterialDatepickerComponent} from './material-datepicker/material-datepicker.component';

@Component({
  selector: 'app-material-demo',
  imports: [
    MaterialTableComponent,
    TableWithPaginationComponent,
    MaterialTableWithExpandableRowsComponent,
    MaterialProgressBarComponent,
    MaterialCardsComponent,
    MaterialDialogComponent,
    MaterialFormComponent,
    MatDivider,
    MaterialToolbarComponent,
    MaterialDatepickerComponent
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.scss'
})
export class MaterialDemoComponent {

}
