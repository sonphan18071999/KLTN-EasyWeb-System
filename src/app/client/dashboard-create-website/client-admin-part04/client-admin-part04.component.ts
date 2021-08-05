import { ContentObserver } from '@angular/cdk/observers';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PreviewService } from 'src/app/services/preview/preview.service';
import { DatabaseService } from "../../../api/Client/database.service";
import { EmailDialogComponent } from "./email-dialog/email-dialog.component";

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
    private toast: ToastrService,
    public dialog: MatDialog,
  private previewService:PreviewService) { }

  ngOnInit(): void {
    this.idDbRegistered = localStorage.getItem('idDbRegistered');
  }
  async onSubmitUserInfo() {
    this.previewService.dataPreview.bussinessName = this.bussinessName;
    this.pushItemToArr('bussinessName',this.bussinessName)
    this.pushItemToArr('location', this.location)
    this.pushItemToArr('email', this.email)
    this.pushItemToArr('contact', this.contact.toString())
    this.pushItemToArr('briefDescription', this.briefDescription)
    await this.databaseService.saveBussinessInformation(this.idDbRegistered, this.arrObj).subscribe(info => {
        this.databaseService.getGeneratorProject(this.idDbRegistered).subscribe(ok => {
          this.dialog.open(EmailDialogComponent);
        });
    }, er => {
        this.toast.warning("Something went wrong","Easy Web: Warning")
    })
    
    await this.databaseService.saveBussinessName(this.idDbRegistered, this.bussinessName).subscribe(data => {
      console.log(data)
    }, er => {
      console.log(er)
    });
    
    await this.databaseService.uploadLogoBusiness(this.idDbRegistered, this.imageSrc).subscribe(data => {
      console.log(data);
    }, er => {
      console.log(er)
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