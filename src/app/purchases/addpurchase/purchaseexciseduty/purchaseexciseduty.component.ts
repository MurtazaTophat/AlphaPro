import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '-', EmployeName: '-', TimeReq: '-', Action: 'Delete'},
];
@Component({
  selector: 'app-purchaseexciseduty',
  templateUrl: './purchaseexciseduty.component.html',
  styleUrls: ['./purchaseexciseduty.component.scss']
})
export class PurchaseexcisedutyComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
