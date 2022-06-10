import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
  {position: '-', name: 'Product Categories', weight: 'Enabled', action: 'Delete'},
];

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'action'];
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
  adddepartmentDialog() {
    this.dialog.open(AdddepartmentComponent,{
      width: '800px'
    });
  }
  editdepartmentDialog() {
    this.dialog.open(EditdepartmentComponent,{
      width: '800px'
    });
  }
}
