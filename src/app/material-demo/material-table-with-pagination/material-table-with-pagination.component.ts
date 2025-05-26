import {Component, computed, signal, Signal, viewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';

@Component({
  selector: 'app-material-table-with-pagination',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatPaginator,
    MatSortHeader,
    MatSort,
    MatFooterRow,
    MatFooterRowDef,
    MatFooterCell,
    MatFooterCellDef,
  ],
  templateUrl: './material-table-with-pagination.component.html',
  styleUrl: './material-table-with-pagination.component.scss'
})
export class TableWithPaginationComponent {
  protected readonly displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  protected readonly elements: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
  ];

  private readonly paginator: Signal<MatPaginator> = viewChild.required(MatPaginator);

  private readonly sort: Signal<MatSort> = viewChild.required(MatSort);

  protected readonly dataSource: Signal<MatTableDataSource<Element>> = computed(() => {
    const src = new MatTableDataSource(this.elements);
    src.paginator = this.paginator();
    src.sort = this.sort();

    return src
  });


}
