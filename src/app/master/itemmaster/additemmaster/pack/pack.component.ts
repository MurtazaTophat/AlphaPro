import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpackingComponent } from './addpacking/addpacking.component';
import { EditpackingComponent } from './editpacking/editpacking.component';

export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: string;
  cost: string;
  NetCost: string;
  Price: string;
  VatAmt: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', cost: '-', NetCost: '-', Price: '-', VatAmt: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', cost: '-', NetCost: '-', Price: '-', VatAmt: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', cost: '-', NetCost: '-', Price: '-', VatAmt: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', cost: '-', NetCost: '-', Price: '-', VatAmt: '-', Action: 'Delete'},
];
@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'cost', 'NetCost', 'Price', 'VatAmt', 'Action'];
  dataSource = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) { }
  addpackingDialog() {
    this.dialog.open(AddpackingComponent,{
      width: '800px'
    });
  }
  editpackingDialog() {
    this.dialog.open(EditpackingComponent,{
      width: '800px'
    });
  }

  ngOnInit(): void {
  }

}
