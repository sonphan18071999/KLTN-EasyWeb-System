import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateWebsiteIndexComponent } from './dashboard-create-website-index.component';

describe('DashboardCreateWebsiteIndexComponent', () => {
  let component: DashboardCreateWebsiteIndexComponent;
  let fixture: ComponentFixture<DashboardCreateWebsiteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCreateWebsiteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCreateWebsiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
