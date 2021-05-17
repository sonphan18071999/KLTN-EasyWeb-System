import {  Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseTableConfigService } from 'src/app/api/Client/database-table-config.service';
import {DialogData} from "../client-admin-part03/client-admin-part03.component";

@Component({
  selector: 'app-dialog-edit-column-item',
  templateUrl: './dialog-edit-column-item.component.html',
  styleUrls: ['./dialog-edit-column-item.component.scss']
})
export class DialogEditColumnItemComponent implements OnInit {

  listColumns:any;
  constructor(public dialogRef: MatDialogRef<DialogEditColumnItemComponent>,
    private databaseTableConfigService : DatabaseTableConfigService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit(): void {
    this.listColumns= this.databaseTableConfigService.getTableConfig();
  }

}
