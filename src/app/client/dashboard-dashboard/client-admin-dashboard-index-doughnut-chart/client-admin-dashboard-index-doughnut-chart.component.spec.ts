import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardIndexDoughnutChartComponent } from './client-admin-dashboard-index-doughnut-chart.component';

describe('ClientAdminDashboardIndexDoughnutChartComponent', () => {
  let component: ClientAdminDashboardIndexDoughnutChartComponent;
  let fixture: ComponentFixture<ClientAdminDashboardIndexDoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardIndexDoughnutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardIndexDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
