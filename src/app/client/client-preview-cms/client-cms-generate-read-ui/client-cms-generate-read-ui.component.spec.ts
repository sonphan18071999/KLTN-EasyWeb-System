import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGenerateReadUIComponent } from './client-cms-generate-read-ui.component';

describe('ClientCMSGenerateReadUIComponent', () => {
  let component: ClientCMSGenerateReadUIComponent;
  let fixture: ComponentFixture<ClientCMSGenerateReadUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGenerateReadUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGenerateReadUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
