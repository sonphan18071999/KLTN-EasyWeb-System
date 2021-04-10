import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProgressBarPartsComponent } from './client-progress-bar-parts.component';

describe('ClientProgressBarPartsComponent', () => {
  let component: ClientProgressBarPartsComponent;
  let fixture: ComponentFixture<ClientProgressBarPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProgressBarPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProgressBarPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
