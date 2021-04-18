import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSGenerateTableComponent } from './client-cms-generate-table.component';

describe('ClientCMSGenerateTableComponent', () => {
  let component: ClientCMSGenerateTableComponent;
  let fixture: ComponentFixture<ClientCMSGenerateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSGenerateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSGenerateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
