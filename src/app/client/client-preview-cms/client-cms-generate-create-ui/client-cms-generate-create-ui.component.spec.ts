import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGenerateCreateUIComponent } from './client-cms-generate-create-ui.component';

describe('ClientCMSGenerateCreateUIComponent', () => {
  let component: ClientCMSGenerateCreateUIComponent;
  let fixture: ComponentFixture<ClientCMSGenerateCreateUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGenerateCreateUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGenerateCreateUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
