import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminPart02Component } from './client-admin-part02.component';

describe('ClientAdminPart02Component', () => {
  let component: ClientAdminPart02Component;
  let fixture: ComponentFixture<ClientAdminPart02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminPart02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminPart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
