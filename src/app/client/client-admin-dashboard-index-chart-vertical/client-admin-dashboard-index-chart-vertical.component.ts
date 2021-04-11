import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-client-admin-dashboard-index-chart-vertical',
  templateUrl: './client-admin-dashboard-index-chart-vertical.component.html',
  styleUrls: ['./client-admin-dashboard-index-chart-vertical.component.scss']
})
export class ClientAdminDashboardIndexChartVerticalComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 38, 41, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(36,48,60)',
      backgroundColor: 'rgb(71,150,195)',
    },
  ];
  // rgb(71,150,195)
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
