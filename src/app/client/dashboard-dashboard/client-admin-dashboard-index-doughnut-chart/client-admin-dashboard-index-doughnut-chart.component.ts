import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-client-admin-dashboard-index-doughnut-chart',
  templateUrl: './client-admin-dashboard-index-doughnut-chart.component.html',
  styleUrls: ['./client-admin-dashboard-index-doughnut-chart.component.scss']
})
export class ClientAdminDashboardIndexDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
