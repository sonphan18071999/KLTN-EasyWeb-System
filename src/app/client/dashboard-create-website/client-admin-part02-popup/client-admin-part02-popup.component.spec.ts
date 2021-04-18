import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminPart02PopupComponent } from './client-admin-part02-popup.component';

describe('ClientAdminPart02PopupComponent', () => {
  let component: ClientAdminPart02PopupComponent;
  let fixture: ComponentFixture<ClientAdminPart02PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminPart02PopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminPart02PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
