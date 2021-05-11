import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTableItemComponent } from './dialog-edit-table-item.component';

describe('DialogEditTableItemComponent', () => {
  let component: DialogEditTableItemComponent;
  let fixture: ComponentFixture<DialogEditTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
