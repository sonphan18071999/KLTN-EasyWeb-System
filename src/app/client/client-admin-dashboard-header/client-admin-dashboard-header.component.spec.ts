import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardHeaderComponent } from './client-admin-dashboard-header.component';

describe('ClientAdminDashboardHeaderComponent', () => {
  let component: ClientAdminDashboardHeaderComponent;
  let fixture: ComponentFixture<ClientAdminDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
