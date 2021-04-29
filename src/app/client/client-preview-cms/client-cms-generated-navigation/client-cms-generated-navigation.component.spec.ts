import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCmsGeneratedNavigationComponent } from './client-cms-generated-navigation.component';

describe('ClientCmsGeneratedNavigationComponent', () => {
  let component: ClientCmsGeneratedNavigationComponent;
  let fixture: ComponentFixture<ClientCmsGeneratedNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCmsGeneratedNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCmsGeneratedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
