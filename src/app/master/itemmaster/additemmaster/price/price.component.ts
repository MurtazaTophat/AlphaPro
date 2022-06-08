import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: 'Price' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Action: 'Delete'},
  {ProductName: 'Price' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Action: 'Delete'},
  {ProductName: 'Price' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Action: 'Delete'},
  {ProductName: 'Price' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Action: 'Delete'},
];
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
