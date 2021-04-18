import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGeneratedComponent } from './client-cms-generated.component';

describe('ClientCMSGeneratedComponent', () => {
  let component: ClientCMSGeneratedComponent;
  let fixture: ComponentFixture<ClientCMSGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
