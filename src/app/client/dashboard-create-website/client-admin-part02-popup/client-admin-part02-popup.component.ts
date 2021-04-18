import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-client-admin-part02-popup',
  templateUrl: './client-admin-part02-popup.component.html',
  styleUrls: ['./client-admin-part02-popup.component.scss']
})
export class ClientAdminPart02PopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ClientAdminPart02PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
