import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootApiService } from './root-api.service';
import { Login} from '../models/Login'

@Injectable({
  providedIn: 'root'
})
export class LoginService   {
  token:any;
  headers: HttpHeaders = new HttpHeaders();
  rootApiService = new RootApiService()
  constructor(private httpClient:HttpClient) {
  }

  login = (login:Login) =>{
    var obj = new Object();
    obj={
      email:login.email,
      password:login.password
    }
    return this.httpClient.post<any>(this.rootApiService.URL+'EasyWebAuth/Login',obj)
  }
}
