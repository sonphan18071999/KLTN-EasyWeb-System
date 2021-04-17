import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminDashboardIndexSquaresComponent } from './client-admin-dashboard-index-squares.component';

describe('ClientAdminDashboardIndexSquaresComponent', () => {
  let component: ClientAdminDashboardIndexSquaresComponent;
  let fixture: ComponentFixture<ClientAdminDashboardIndexSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminDashboardIndexSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminDashboardIndexSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
