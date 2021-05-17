import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{DialogData} from "../client-admin-part02/client-admin-part02.component";
@Component({
  selector: 'app-dialog-edit-table-item',
  templateUrl: './dialog-edit-table-item.component.html',
  styleUrls: ['./dialog-edit-table-item.component.scss']
})
export class DialogEditTableItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditTableItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
