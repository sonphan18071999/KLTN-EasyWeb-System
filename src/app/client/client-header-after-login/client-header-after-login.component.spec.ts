import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderAfterLoginComponent } from './client-header-after-login.component';

describe('ClientHeaderAfterLoginComponent', () => {
  let component: ClientHeaderAfterLoginComponent;
  let fixture: ComponentFixture<ClientHeaderAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHeaderAfterLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHeaderAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
