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
    var formData: any = new FormData();
    formData.append("email", login.email);
    formData.append("password", login.password);
    return this.httpClient.post<any>(rootApiService.URL+'ServiceWebAppAuth/Login',formData,{headers:header})
  }
}
