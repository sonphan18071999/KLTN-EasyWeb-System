import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,AfterViewInit, Component, ElementRef } from '@angular/core';
import { RootApiService } from './root-api.service';
import { Login} from '../models/Login'

@Injectable({
  providedIn: 'root'
})
export class LoginService   {
  token:any;
  headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient:HttpClient) {
  }

  GetHeader = (): HttpHeaders => {
    let headers: HttpHeaders = new HttpHeaders();
    this.token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + this.token);
    this.headers = headers;
    return headers;
  }

  login = (login:Login) =>{
    var rootApiService = new RootApiService();
    var header = this.GetHeader()
    var obj = new Object();
    obj={
      email:login.email,
      password:login.password
    }
    return this.httpClient.post<any>(rootApiService.URL+'ServiceWebAppAuth/Login',obj,{headers:header})
  }
}
