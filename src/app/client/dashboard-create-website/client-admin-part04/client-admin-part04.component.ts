import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  idDbRegistered:any;
  imageSrc: string | undefined;

  constructor(private databaseService:DatabaseService,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.idDbRegistered = localStorage.getItem('idDbRegistered');
  }
  async onSubmitUserInfo(){
    this.pushItemToArr('bussinessName',this.bussinessName)
    this.pushItemToArr('location', this.location)
    this.pushItemToArr('email', this.email)
    this.pushItemToArr('contact', this.contact)
    this.pushItemToArr('briefDescription', this.briefDescription)
    console.log(JSON.stringify( this.arrObj))
    // this.pushItemToArr('imageSrc',this.imageSrc);
    return await this.databaseService.saveBussinessInformation(this.idDbRegistered, this.arrObj).subscribe(info=>{
      this.toast.success("Filled up bussiness information","Easy Web: Information");
    },er=>{
        this.toast.warning("Something went wrong","Easy Web: Warning")
    })

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
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imageSrc=event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

export interface Item{
  configName:String,
  configValue:String
}