import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminPart03Component } from './client-admin-part03.component';

describe('ClientAdminPart03Component', () => {
  let component: ClientAdminPart03Component;
  let fixture: ComponentFixture<ClientAdminPart03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminPart03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminPart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
