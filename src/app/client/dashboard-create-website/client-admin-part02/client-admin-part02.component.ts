import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel} from '@angular/cdk/collections';
import { MatDialog} from '@angular/material/dialog';
import { ClientAdminPart02PopupComponent} from '../client-admin-part02-popup/client-admin-part02-popup.component';
import { DatabaseTableConfigService } from '../../../api/Client/database-table-config.service';
import { TableConfigure } from 'src/app/models/TableConfigure';
import {DialogEditTableItemComponent} from './dialog-edit-table-item/dialog-edit-table-item.component';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-client-admin-part02',
  templateUrl: './client-admin-part02.component.html',
  styleUrls: ['./client-admin-part02.component.scss']
})
export class ClientAdminPart02Component implements OnInit {
  displayedColumns: string[] = ['Select','Name', 'Explicit Name', 'Columns', 'Action Group','actionGroup'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<TableConfigure>(true, []);
  allEntityDbRegister : TableConfigure[]=[];
  itemChoosed:any=null;
  showActionDropDown: boolean = false;
  allEntityDbRegisterPersistence: TableConfigure[] = [];
  @Output() isActive = new EventEmitter<Number>();

  

  constructor(public dialog: MatDialog,
            private databaseTableConfigService : DatabaseTableConfigService) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.getAllTableConfigure();
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
  checkboxLabel(row?: TableConfigure): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  popupEntities(item: any) {
    const dialogRef =  this.dialog.open(ClientAdminPart02PopupComponent,{
      width: 'auto',
      data: { name: item.name, position: item.position, explicitName: item.explicitName }
    });

    dialogRef.afterClosed().subscribe(close => {
      console.log("Đã close")
      this.itemChoosed=null
    })
  }

  scrollToTop(){
    document.getElementsByClassName('dashboard-h3')[0].scrollTo(0, 0);
  }

  SubmitEntities(){
    this.isActive.emit(3);
  }

  searchThis(data: any) {
  //   const trimmedKeyword = data.split("")
  //   this.allEntityDbRegister.filter(item => {
  //     return trimmedKeyword.every(word => {
  //       if(item.name.some(word)))
  //     })
  //  })
  }

  getAllTableConfigure(){
    var idDbRegistered = localStorage.getItem("idDbRegistered");
    this.databaseTableConfigService.fetchTableConfig(idDbRegistered).subscribe(ok=>{
      this.databaseTableConfigService.setTableConfig(ok);
      this.allEntityDbRegister=ok;
    });
  }

  chooseItem(item: any) {
    if (this.itemChoosed === item) {
      this.itemChoosed=null
    }else{
      this.itemChoosed = item
    }
  }
  openDialogEdit(){
    const dialogRef = this.dialog.open(DialogEditTableItemComponent,{
      data:{name:this.itemChoosed.name,key:this.itemChoosed.id, explicitName:this.itemChoosed.explicitName, actions:this.itemChoosed.actionGroup,isHidden:this.itemChoosed.isHidden}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllTableConfigure()
      this.itemChoosed=null
    });
  }
  viewColumns(item:TableConfigure){
    var idDbRegistered = localStorage.getItem("idDbRegistered");
      this.databaseTableConfigService.getColumnInTableById(idDbRegistered, item.id).subscribe((ok)=>{
      })
  }
}

export interface DialogData {
  key: number;
  name: string;
  explicitName: string;
  actions: string;
  isHidden: string;
}
