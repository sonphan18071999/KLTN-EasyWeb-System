import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseService } from "../../../api/Client/database.service";
@Component({
  selector: 'app-client-admin-part04',
  templateUrl: './client-admin-part04.component.html',
  styleUrls: ['./client-admin-part04.component.scss']
})
export class ClientAdminPart04Component implements OnInit {
  @Output() isActive = new EventEmitter<Number>();
  bussinessName:any;
  location:any;
  email:any;
  contact:any;
  briefDescription:any;
  arrObj:Item[]=[];
  idUserLogged:any;
  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    this.idUserLogged = localStorage.getItem("userIdLogged");
  }
  async onSubmitUserInfo(){
    this.pushItemToArr('bussinessName',this.bussinessName)
    this.pushItemToArr('location', this.location)
    this.pushItemToArr('email', this.email)
    this.pushItemToArr('contact', this.contact)
    this.pushItemToArr('briefDescription', this.briefDescription)
    // return await this.databaseService.saveBussinessInformation(this.idUserLogged,this.arrObj).subscribe(info=>{
    //      window.location.href="website/generated/index";
    // })
  }
  pushItemToArr(name:any, value:any){
    return this.arrObj.push({
      configName:name,
      configValue:value      
    })
  }
  onResetUserInfo():any{
    this.bussinessName="";
    this.location="";
    this.email="";
    this.contact="";
    this.briefDescription="";
  }
}

export interface Item{
  configName:String,
  configValue:String
}