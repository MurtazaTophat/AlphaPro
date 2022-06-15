import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AdduomComponent } from './adduom/adduom.component';
import { EdituomComponent } from './edituom/edituom.component';

export interface PeriodicElement {
  name: string;
  position: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
  {position: '-', name: 'Product Categories', action: 'Delete'},
];

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UomComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) { }
  adduomDialog() {
    this.dialog.open(AdduomComponent,{
      width: '800px'
    });
  }
  edituomDialog() {
    this.dialog.open(EdituomComponent,{
      width: '800px'
    });
  }
}
