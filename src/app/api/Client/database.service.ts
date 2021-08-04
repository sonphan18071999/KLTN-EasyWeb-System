import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootApiService } from '../root-api.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  token:any;
  headers: HttpHeaders = new HttpHeaders();
  rootApiService = new RootApiService()

  constructor(private httpClient:HttpClient) {
  }

  GetHeader = (): HttpHeaders => {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.token = localStorage.getItem('token');
    headers = headers.append('Authorization', `Bearer ${this.token}`);
    this.headers = headers;
    return headers;
  }

  registerClientDatabase(obj:any){
    let header = this.GetHeader();
     return this.httpClient.post<any>(this.rootApiService.URL+'DbConnection/RegisterNewDatabase',obj,{headers:header});
  }
  
  getListDatabaseRegistered(){
    let header = this.GetHeader();
    return this.httpClient.get<any>(this.rootApiService.URL+'CustomerDbStatistics/GetStatistics',{headers:header});
  }

  saveBussinessInformation(idDatabaseRegister:any, obj:any){
    let header = this.GetHeader()
    return this.httpClient.post<any>(this.rootApiService.URL+'MasterConfig/CreateMasterConfig?dbGuid='+idDatabaseRegister,obj,{headers:header});
  }
  saveBussinessName(id: any, databaseName: string) {
    let header = this.GetHeader();
    return this.httpClient.put<any>(this.rootApiService.URL + `DbConnection/RegisterBussinessName?dbGuid=${id}&bussinessName=${databaseName}`,{headers:header});
  }

  registerNewUser(user:User){
    return this.httpClient.post<any>(this.rootApiService.URL+"EasyWebAuth/Register",user);
  }

  uploadLogoBusiness(idDatabaseRegister:any,img:any){
    let header = this.GetHeader();
    return this.httpClient.post<any>(this.rootApiService.URL+'MasterConfig/UploadImage?dbGuid='+idDatabaseRegister,{"img":img},{headers:header});
  }

  getGeneratorProject(idDatabaseRegister:any){
    let header = this.GetHeader();
    return this.httpClient.get<any>('http://vuonghuynhsolutions.tech:5000/create-api/' + idDatabaseRegister, { headers: header });
  }

  getUserInformation() {
    let header = this.GetHeader()
    return this.httpClient.get<any>(this.rootApiService.URL+'User',{headers:header})
  }
}
