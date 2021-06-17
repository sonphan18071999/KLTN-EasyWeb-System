import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-admin-dashboard-header',
  templateUrl: './client-admin-dashboard-header.component.html',
  styleUrls: ['./client-admin-dashboard-header.component.scss']
})
export class ClientAdminDashboardHeaderComponent implements OnInit {

  userToken: any;
  constructor() { }
  ngOnInit(): void {
    this.userToken = localStorage.getItem("token");
  }

}
