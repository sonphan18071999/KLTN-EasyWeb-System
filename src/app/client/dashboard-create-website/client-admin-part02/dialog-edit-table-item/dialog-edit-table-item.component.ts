import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfigureEntityService } from 'src/app/api/Client/configure-entity.service';
import { TableConfigure } from 'src/app/models/TableConfigure';
import { DialogData } from '../client-admin-part02.component';
@Component({
  selector: 'app-dialog-edit-table-item',
  templateUrl: './dialog-edit-table-item.component.html',
  styleUrls: ['./dialog-edit-table-item.component.scss'],
})
export class DialogEditTableItemComponent implements OnInit {
  actionRead: boolean = false;
  actionUpdate: boolean = false;
  actionCreate: boolean = false;
  actionDelete: boolean = false;
  isInUse: boolean = true;
  idDbRegistered: any = '';
  entityConfigure: any = null;
  constructor(
    public dialogRef: MatDialogRef<DialogEditTableItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private configureEntity: ConfigureEntityService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.idDbRegistered = localStorage.getItem('idDbRegistered');
    this.checkStatusActions();
    this.isInUse = this.checkIsHiddenEntity();
    console.log(this.data)
  }

  checkIsHiddenEntity() {
    if (this.data.isHidden) {
      return false;
    }
    return true;
  }

  checkStatusActions() {
    if (this.data.actions.includes('C')) {
      this.actionCreate = true;
    }
    if (this.data.actions.includes('R')) {
      this.actionRead = true;
    }
    if (this.data.actions.includes('U')) {
      this.actionUpdate = true;
    }
    if (this.data.actions.includes('D')) {
      this.actionDelete = true;
    }
  }

  async updateEntityConfigure() {
    if (this.data.explicitName.length <= 0) {
      this.toast.error(`Explicit name can't be empty`, `EasyWeb: Information`);
    }

    console.log(this.isInUse)
    let actions = this.getStringStatusActions();
    this.entityConfigure = {
      name: this.data.name,
      explicitName: this.data.explicitName,
      isHidden: this.isInUse,
      actionGroup: actions,
      id: this.data.key,
    };
    await this.configureEntity
      .updateEntityConfigure(this.idDbRegistered, this.entityConfigure)
      .subscribe((ok) =>
        this.toast.success(
          `Update ` + this.data.name + ` successfully!`,
          `Easy Web: Information`
        )
      );
  }

  toggleCheckValue() {
    // this.isInUse = !this.isInUse;
    console.log(this.isInUse)
    return this.isInUse
  }

  getStringStatusActions() {
    let actions = '';
    if (this.actionCreate) {
      actions += 'C';
    }
    if (this.actionRead) {
      actions += 'R';
    }
    if (this.actionUpdate) {
      actions += 'U';
    }
    if (this.actionDelete) {
      actions += 'D';
    }

    return actions;
  }
}
