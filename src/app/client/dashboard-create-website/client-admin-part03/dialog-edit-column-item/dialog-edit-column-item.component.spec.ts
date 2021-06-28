import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditColumnItemComponent } from './dialog-edit-column-item.component';

describe('DialogEditColumnItemComponent', () => {
  let component: DialogEditColumnItemComponent;
  let fixture: ComponentFixture<DialogEditColumnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditColumnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditColumnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
