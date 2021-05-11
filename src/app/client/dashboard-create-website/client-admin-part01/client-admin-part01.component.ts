import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl} from '@angular/forms';
import { RegisterDatabase } from '../../../models/RegisterDatabase';
import { DatabaseService } from '../../../api/Client/database.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-client-admin-part01',
  templateUrl: './client-admin-part01.component.html',
  styleUrls: ['./client-admin-part01.component.scss']
})
export class ClientAdminPart01Component implements OnInit {
  userDBRole = new FormControl();
  DatabaseSelect = new FormControl();
  txtDBUrl:any;
  txtUserName:any;
  txtPassword:any;
  txtRole:any;
  txtDBType:any;
  txtSchemaName:any;
  objRegisterDatabase = new RegisterDatabase();

  @Output() isActive = new EventEmitter<Object>();
  constructor(private databaseSerivce : DatabaseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  SubmitDBSchema(){
    this.objRegisterDatabase.username = this.txtUserName;
    this.objRegisterDatabase.password = this.txtPassword;
    this.objRegisterDatabase.server = this.txtDBUrl;
    this.objRegisterDatabase.dbType = Number.parseInt(this.txtDBType);
    this.objRegisterDatabase.initialCatalog=this.txtSchemaName;
    if(this.txtDBUrl ==null){
      alert("URL can't not be empty!")
    }else if(this.txtUserName ==null){
      alert("Username can't be empty!")
    }else if(this.txtPassword ==null){
      alert("Password can't be empty!")
    }else{
      this.databaseSerivce.registerClientDatabase(this.objRegisterDatabase).subscribe(res=>{
          this.isActive.emit(2)    
          localStorage.setItem("idDbRegistered",res.guid)
      })
    }
  }
 


}
