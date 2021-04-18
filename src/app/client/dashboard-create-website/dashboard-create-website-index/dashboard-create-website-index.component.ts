import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-create-website-index',
  templateUrl: './dashboard-create-website-index.component.html',
  styleUrls: ['./dashboard-create-website-index.component.scss']
})
export class DashboardCreateWebsiteIndexComponent implements OnInit {

  constructor() { }
  currentPart:any;
  ngOnInit(): void {
    this.currentPart=4;
  }

  ngDoCheck()	{
  }
  switchPart(data:any){
    this.currentPart=data
  }
}
