import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminPart04Component } from './client-admin-part04.component';

describe('ClientAdminPart04Component', () => {
  let component: ClientAdminPart04Component;
  let fixture: ComponentFixture<ClientAdminPart04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAdminPart04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAdminPart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
