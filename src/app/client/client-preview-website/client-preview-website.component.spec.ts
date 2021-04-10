import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPreviewWebsiteComponent } from './client-preview-website.component';

describe('ClientPreviewWebsiteComponent', () => {
  let component: ClientPreviewWebsiteComponent;
  let fixture: ComponentFixture<ClientPreviewWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPreviewWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPreviewWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
