import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfigureColumnService } from 'src/app/api/Client/configure-column.service';
import { DatabaseTableConfigService } from 'src/app/api/Client/database-table-config.service';
import { DialogConfigureForeignKeyComponent } from './dialog-configure-foreign-key/dialog-configure-foreign-key.component';
import {DialogEditColumnItemComponent} from "./dialog-edit-column-item/dialog-edit-column-item.component";

@Component({
  selector: 'app-client-admin-part03',
  templateUrl: './client-admin-part03.component.html',
  styleUrls: ['./client-admin-part03.component.scss']
})
export class ClientAdminPart03Component implements OnInit {

  listTables:any;
  selectedTable:any;
  listComlumnsInTable:any=[];
  selectedItem:any=null;
  idDbRegistered:any;
  @Output() isActive = new EventEmitter<Number>();
  constructor(public dialog: MatDialog, private databaseTableConfigService : DatabaseTableConfigService,
    private columnConfigure:ConfigureColumnService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listTables=this.databaseTableConfigService.getTableConfig();
  }

  chooseItem(item:any){
    this.selectedItem=item;
  }

  selectTable(){
    this.idDbRegistered = localStorage.getItem("idDbRegistered");
    this.databaseTableConfigService.getColumnInTableById(this.idDbRegistered,this.selectedTable).subscribe(ok=>{
      this.listComlumnsInTable=ok
    });
  }

  SubmitColumns(){
    this.isActive.emit(4);
  }

  editColumn() {
    if (this.selectedItem===null) {
      this.toastr.warning("Please choose one column","EasyWeb: Warning")
    } else {
      this.dialog.open(DialogEditColumnItemComponent,{
        width: 'auto',
        data:{ id:this.selectedItem.id,ordinalPosition:this.selectedItem.ordinalPosition,
          displayComponent:this.selectedItem.displayComponent,name:this.selectedItem.name }})
    }
  }
 
  async hideColumnConfigure() {
    if (this.selectedItem === null) {
      this.toastr.warning("Please choose one column","EasyWeb: Warning")
    } else {
    if(this.selectedItem.isNullable==="YES" ){
      this.selectedItem.isHidden=!this.selectedItem.isHidden;
      this.submitHiddenColumn();
    }else if(this.selectedItem.isNullable==="NO"){
      this.toastr.warning("This column can't be hiden because it's not nullable","EasyWeb: Warning");
    }
    else{
      this.selectedItem.isHidden!=this.selectedItem.isHidden;
      this.submitHiddenColumn()
    }
  }
  }

  setForeignKey() {
    if (this.selectedItem===null) {
      this.toastr.warning("Please choose one column","EasyWeb: Warning")
    } else {
     console.log(this.listTables)
    } 
  }

  submitHiddenColumn(){
     this.columnConfigure.updateColumnConfigure(this.idDbRegistered,this.selectedItem).subscribe(ok=>{
      this.toastr.success(`Column `+this.selectedItem.name +` hidden`,"EasyWeb: Information")
      this.listTables=this.databaseTableConfigService.getTableConfig();
    })
  }
}

export interface DialogData {
  id: number;
  ordinalPosition: number;
  displayComponent:number;
  name:string;
}
