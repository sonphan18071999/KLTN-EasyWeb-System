import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardIndexComponent } from './client-admin-dashboard-index.component';

describe('ClientAdminDashboardIndexComponent', () => {
  let component: ClientAdminDashboardIndexComponent;
  let fixture: ComponentFixture<ClientAdminDashboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
