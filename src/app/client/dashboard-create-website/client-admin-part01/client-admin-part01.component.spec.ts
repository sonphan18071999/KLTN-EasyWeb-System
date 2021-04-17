import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminPart01Component } from './client-admin-part01.component';

describe('ClientAdminPart01Component', () => {
  let component: ClientAdminPart01Component;
  let fixture: ComponentFixture<ClientAdminPart01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminPart01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminPart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
