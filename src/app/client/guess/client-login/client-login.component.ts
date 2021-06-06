import { Component, ElementRef , OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { LoginService} from '../../../api/login.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {

  userName:any;
  password:any;
  constructor(
    private login: LoginService,
    private route: Router,
    private toast:ToastrService
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    this.loginUser();
  }
  loginUser=()=>{
    document.querySelector<any>('.login-form-container').addEventListener('keypress',  (e: any) => {
      if (e.key === 'Enter') {
        // code for enter
        this.checkUser()
      }
    });
  }
  checkUser(){
    var user = new Login();
    user.email=this.userName,
    user.password=this.password
    this.login.login(user).subscribe(success=>{
      this.toast.success("Welcome","Easy Web: Information")
      this.route.navigate(['/client/admin/'])
      localStorage.setItem("token", success.accessToken)
    },error=>{
      this.toast.warning("Password and username might not correct","Easy Web: Warning")
    })
  }
}
