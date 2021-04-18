import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGenerateDeleteUIComponent } from './client-cms-generate-delete-ui.component';

describe('ClientCMSGenerateDeleteUIComponent', () => {
  let component: ClientCMSGenerateDeleteUIComponent;
  let fixture: ComponentFixture<ClientCMSGenerateDeleteUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGenerateDeleteUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGenerateDeleteUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
