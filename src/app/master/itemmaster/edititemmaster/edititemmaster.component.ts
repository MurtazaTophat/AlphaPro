import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: string;
  Qty: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: '-' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Qty: '0.00', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Qty: '0.00', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Qty: '0.00', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Qty: '0.00', Action: 'Delete'},
  {ProductName: '-' , ProductDescription: '0.00', EmployeName: '0.00', TimeReq: '0.00', Qty: '0.00', Action: 'Delete'},
];
@Component({
  selector: 'app-edititemmaster',
  templateUrl: './edititemmaster.component.html',
  styleUrls: ['./edititemmaster.component.scss']
})
export class EdititemmasterComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Qty', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
