import {AfterViewInit, Component, ElementRef , OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { LoginService} from '../../../api/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {

  constructor(
    private login: LoginService,
    private elementRef: ElementRef,
    private route: Router,

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
        // [routerLink]="['/client/admin/']" routerLinkActive="router-link-active"
        this.checkUser()
      }
    });
  }
  checkUser=()=>{
    var user = new Login();
    user.email="hoangvuong19991964@gmail.com",
    user.password="hoangvuong"
    this.login.login(user).subscribe(success=>{
      this.route.navigate(['/client/admin/'])
    },error=>{

    })
  }
}
