import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public Flagsec:Boolean=false;
  public ToggelOpen():void{
    this.Flagsec=!this.Flagsec
  }
  public Flag:Boolean=false;
  public ToggelsecOpen():void{
    this.Flag=!this.Flag
  }
}
