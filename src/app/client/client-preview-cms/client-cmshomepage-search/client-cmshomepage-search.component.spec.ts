import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCMSHomepageSearchComponent } from './client-cmshomepage-search.component';

describe('ClientCMSHomepageSearchComponent', () => {
  let component: ClientCMSHomepageSearchComponent;
  let fixture: ComponentFixture<ClientCMSHomepageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCMSHomepageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCMSHomepageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
