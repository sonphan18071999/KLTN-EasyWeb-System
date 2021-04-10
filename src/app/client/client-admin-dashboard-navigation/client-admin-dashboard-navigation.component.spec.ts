import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardNavigationComponent } from './client-admin-dashboard-navigation.component';

describe('ClientAdminDashboardNavigationComponent', () => {
  let component: ClientAdminDashboardNavigationComponent;
  let fixture: ComponentFixture<ClientAdminDashboardNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
