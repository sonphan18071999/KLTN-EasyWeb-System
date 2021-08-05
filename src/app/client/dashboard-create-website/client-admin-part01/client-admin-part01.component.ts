
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl} from '@angular/forms';
import { RegisterDatabase } from '../../../models/RegisterDatabase';
import { DatabaseService } from '../../../api/Client/database.service';
import { ToastrService } from 'ngx-toastr';
import { PreviewService } from '../../../services/preview/preview.service';
import { Observable } from 'rxjs';
import { mergeMap } from "rxjs/operators";

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
  idDatabaseRegistered: any;

  @Output() isActive = new EventEmitter<Object>();
  constructor(private databaseService : DatabaseService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private previewService: PreviewService) { }

  ngOnInit(): void {

  }

  async SubmitDBSchema():Promise<void> {
    this.previewService.dataPreview.type = this.databaseType;
    this.previewService.dataPreview.port = this.portServer;
    this.previewService.dataPreview.schema = this.txtSchemaName;
    this.objRegisterDatabase.username = this.txtUserName;
    this.objRegisterDatabase.password = this.txtPassword;
    this.objRegisterDatabase.server = this.txtDBUrl;
    this.objRegisterDatabase.dbType = Number.parseInt(this.databaseType);
    this.objRegisterDatabase.initialCatalog = this.txtSchemaName;
    this.objRegisterDatabase.serverPort = this.portServer;

    if (this.txtDBUrl == null) {
      alert("URL can't not be empty!");
      this.toast.warning("URL can't not be empty!", "EasyWeb: Warning");
    } else if (this.txtUserName == null) {
      this.toast.warning("Username can't be empty!", "EasyWeb: Warning");
    } else if (this.txtPassword == null) {
      this.toast.warning("Password can't be empty!", "EasyWeb: Warning");
    } else {
      const registerComplete = await this.registerDatabase();
      if (registerComplete) {
        this.idDatabaseRegistered = registerComplete.guid
        localStorage.setItem("idDbRegistered",registerComplete.guid)
        var createSuccess = await this.createDatabase(registerComplete.guid);
        if (createSuccess) {
          var resp = await this.populateDatabase(registerComplete.guid);
          if (resp) {
            this.isActive.emit(2);  
          }
        }
      }
    }
  }

  async registerDatabase(): Promise<any>{
    return this.databaseService.registerClientDatabase(this.objRegisterDatabase).toPromise();
  }

  async createDatabase(id:any): Promise<any>{
    return this.databaseService.createRegisterClientDatabase(id).toPromise();
  }

  async populateDatabase(id:any): Promise<any>{
    return this.databaseService.populateDefaultConfig(id).toPromise();
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

  resetForm() {
    this.portServer = 0;
    this.txtSchemaName = '';
    this.txtUserName = '';
    this.databaseType = 1;
    this.txtPassword = '';
    this.txtDBUrl = '';
    
    this.previewService.dataPreview.type = this.databaseType;
    this.previewService.dataPreview.port = this.portServer;
    this.previewService.dataPreview.schema = this.txtSchemaName;
  }
}