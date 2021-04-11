import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardIndexChartVerticalComponent } from './client-admin-dashboard-index-chart-vertical.component';

describe('ClientAdminDashboardIndexChartVerticalComponent', () => {
  let component: ClientAdminDashboardIndexChartVerticalComponent;
  let fixture: ComponentFixture<ClientAdminDashboardIndexChartVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardIndexChartVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardIndexChartVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
