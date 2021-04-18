import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGenerateUpdateUIComponent } from './client-cms-generate-update-ui.component';

describe('ClientCMSGenerateUpdateUIComponent', () => {
  let component: ClientCMSGenerateUpdateUIComponent;
  let fixture: ComponentFixture<ClientCMSGenerateUpdateUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGenerateUpdateUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGenerateUpdateUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
