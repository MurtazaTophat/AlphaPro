import { Component, OnInit } from '@angular/core';
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
  selector: 'app-purchaseitem',
  templateUrl: './purchaseitem.component.html',
  styleUrls: ['./purchaseitem.component.scss']
})
export class PurchaseitemComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'cost', 'NetCost', 'Price', 'VatAmt', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
