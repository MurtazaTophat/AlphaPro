import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditsaleComponent } from './editsale/editsale.component';
import { AddsaleComponent } from './addsale/addsale.component';

export interface PeriodicElement {
  vnumber: string;
  date: string;
  paymenttype: string;
  invoicetype: string;
  suppliername: string;
  supplierinvno: string;
  totalamt: string;
  totalvat: string;
  post: string;
  branch: string;
  costcenter: string;
  createby: string;
  createddate: string;
  modifieby: string;
  modifiedate: string;
  postedby: string;
  posteddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {vnumber: '-', date: '-', paymenttype: '-', invoicetype: '-', suppliername: '-', supplierinvno: '-', totalamt: '-', totalvat: '-', post: '-', branch: '-', costcenter: '-', createby: '-', createddate: '-', modifieby: '-', modifiedate: '-', postedby: '-', posteddate: '-',}
];
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  displayedColumns: string[] = ['vnumber',
  'date',
  'paymenttype',
  'invoicetype',
  'suppliername',
  'supplierinvno',
  'totalamt',
  'totalvat',
  'post',
  'branch',
  'costcenter',
  'createby',
  'createddate',
  'modifieby',
  'modifiedate',
  'postedby',
  'posteddate'];
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
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.vnumber + 1}`;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
constructor(public dialog: MatDialog) { }
addsaleDialog() {
  this.dialog.open(AddsaleComponent,{
    width: '1170px'
  });
}
editsaleDialog() {
  this.dialog.open(EditsaleComponent,{
    width: '1170px'
  });
}
}
