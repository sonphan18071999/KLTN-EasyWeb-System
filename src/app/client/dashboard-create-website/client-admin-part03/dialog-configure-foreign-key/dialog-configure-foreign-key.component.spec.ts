import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfigureForeignKeyComponent } from './dialog-configure-foreign-key.component';

describe('DialogConfigureForeignKeyComponent', () => {
  let component: DialogConfigureForeignKeyComponent;
  let fixture: ComponentFixture<DialogConfigureForeignKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfigureForeignKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfigureForeignKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
