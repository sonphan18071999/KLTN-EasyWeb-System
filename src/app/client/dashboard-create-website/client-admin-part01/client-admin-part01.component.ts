import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl} from '@angular/forms';
import { RegisterDatabase } from '../../../models/RegisterDatabase';
import { DatabaseService } from '../../../api/Client/database.service';
import { ThisReceiver } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-admin-part01',
  templateUrl: './client-admin-part01.component.html',
  styleUrls: ['./client-admin-part01.component.scss']
})
export class ClientAdminPart01Component implements OnInit {
  portServerForm = new FormControl();
  DatabaseSelect = new FormControl();
  txtDBUrl:any;
  txtUserName:any;
  txtPassword:any;
  portServer:any=0;
  databaseType:any;
  txtSchemaName:any;
  objRegisterDatabase = new RegisterDatabase();

  @Output() isActive = new EventEmitter<Object>();
  constructor(private databaseSerivce : DatabaseService,
    private route: ActivatedRoute,
    private toast:ToastrService) { }

  ngOnInit(): void {
  }
  SubmitDBSchema() {
    this.objRegisterDatabase.username = this.txtUserName;
    this.objRegisterDatabase.password = this.txtPassword;
    this.objRegisterDatabase.server = this.txtDBUrl;
    this.objRegisterDatabase.dbType = Number.parseInt(this.databaseType);
    this.objRegisterDatabase.initialCatalog = this.txtSchemaName;
    this.objRegisterDatabase.serverPort=this.portServer;
    if (this.txtDBUrl == null) {
      alert("URL can't not be empty!")
      this.toast.warning("URL can't not be empty!","EasyWeb: Warning")
    } else if (this.txtUserName == null) {
      this.toast.warning("Username can't be empty!","EasyWeb: Warning")
    } else if (this.txtPassword == null) {
      this.toast.warning("Password can't be empty!","EasyWeb: Warning")
    } else {
      this.databaseSerivce.registerClientDatabase(this.objRegisterDatabase).subscribe(res => {
        console.log(res)
        this.isActive.emit(2)
        localStorage.setItem("idDbRegistered", res.guid)
      })
    }
  }
  triggerPortNumber(){
    if(this.databaseType==='0'){
      this.portServer=1433;
    }else if(this.databaseType==='1'){
      this.portServer=3306;
    }else if(this.databaseType==='2'){
      this.portServer=5432;
    }
  }
}
