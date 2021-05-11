import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseTableConfigService } from 'src/app/api/Client/database-table-config.service';
import {DialogEditColumnItemComponent} from "../dialog-edit-column-item/dialog-edit-column-item.component";

@Component({
  selector: 'app-client-admin-part03',
  templateUrl: './client-admin-part03.component.html',
  styleUrls: ['./client-admin-part03.component.scss']
})
export class ClientAdminPart03Component implements OnInit {

  listTables:any;
  selectedTable:any;
  listComlumnsInTable:any;
  @Output() isActive = new EventEmitter<Number>();
  constructor(public dialog: MatDialog, private databaseTableConfigService : DatabaseTableConfigService) { }

  ngOnInit(): void {
    this.listTables=this.databaseTableConfigService.getTableConfig();
  }
  selectTable(){
    var idDbRegistered = localStorage.getItem("idDbRegistered");
    this.databaseTableConfigService.getColumnInTableById(idDbRegistered,this.selectedTable).subscribe(ok=>{
      this.listComlumnsInTable=ok
    });
  }
  SubmitColumns(){
    this.isActive.emit(4);
  }
  editColumn(){
    this.dialog.open(DialogEditColumnItemComponent,{
      width: 'auto',
      data:{  }})
  }
}
