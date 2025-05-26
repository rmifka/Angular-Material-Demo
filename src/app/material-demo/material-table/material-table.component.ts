import {Component, signal, Signal} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-material-table',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './material-table.component.html',
  styleUrl: './material-table.component.scss'
})
export class MaterialTableComponent {
  dataSource: Signal<{ name: string, id: number }[]> = signal([
    {name: 'John Doe', id: 1},
    {name: 'Jane Smith', id: 2},
    {name: 'Alice Johnson', id: 3},
    {name: 'Bob Brown', id: 4},
    {name: 'Charlie White', id: 5}
  ]);

  displayedColumns: string[] = ['id', 'name']; // Case Sensitive column names

}
