import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from 'src/app/api/Client/database.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  constructor(private databaseService:DatabaseService, 
    private toast:ToastrService) { }
  lName:any;
  fName:any;
  password:any;
  email:any;
  userName:any;
  userSubmit:any;
  ngOnInit(): void {
  }
  onSubmitUser() {
    this.userSubmit = new User(this.fName, this.lName, this.userName, this.email, this.password);
    this.databaseService.registerNewUser(this.userSubmit).subscribe(res => {
      console.log(res.succeeded)
      if (!res.succeeded) {
          this.toast.warning(res.errors[0].description, "EasyWeb: Warning")
      }
      else {
        this.toast.success("Create new user succesfully", "EasyWeb: Information")
        window.location.href = "/Home";
      }
    })
  }
}
