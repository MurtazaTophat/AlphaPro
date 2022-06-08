import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AdditemmasterComponent } from './additemmaster/additemmaster.component';
import { EdititemmasterComponent } from './edititemmaster/edititemmaster.component';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  product: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
  {position: 'Product Categories', name: 'Bags & Baskets', weight: '-', symbol: '74427001508', product: '004-Pedrini Poul Try', description:'-'},
];

@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.scss']
})
export class ItemmasterComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'product', 'description'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit(): void {
  }
  public Flag:Boolean=false;
  public ToggelOpen():void{
    this.Flag=!this.Flag
  }
  public ToggelsecOpen():void{
    this.Flag=!this.Flag
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
  additemmasetrDialog() {
    this.dialog.open(AdditemmasterComponent,{
      width: '1170px'
    });
  }
  edititemmasterDialog() {
    this.dialog.open(EdititemmasterComponent,{
      width: '1170px'
    });
  }
}
