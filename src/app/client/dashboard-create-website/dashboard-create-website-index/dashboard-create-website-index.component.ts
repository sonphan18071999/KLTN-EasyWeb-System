import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-create-website-index',
  templateUrl: './dashboard-create-website-index.component.html',
  styleUrls: ['./dashboard-create-website-index.component.scss']
})
export class DashboardCreateWebsiteIndexComponent implements OnInit {

  constructor() { }
  currentPart:any;
  currentIdDbRegistered:any;
  ngOnInit(): void {
    this.currentPart=1;
  }

  ngDoCheck()	{
  }
  switchPart(data:any){
    this.currentPart=data
  }
  screenActive(event:any){
     this.currentPart=event;
  }
}
