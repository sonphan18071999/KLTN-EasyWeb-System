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
     return this.httpClient.post<any>(this.rootApiService.URL+'DbConnection/RegisterNewDatabase',obj,{headers:this.GetHeader()});
  }
  
  createRegisterClientDatabase(idDb: any) {
    return this.httpClient.post<any>(this.rootApiService.URL+`CustomerDbProcess/CreateSystemTable?dbGuid=` +`${idDb}`,{},{headers:this.GetHeader()});
  }

  populateDefaultConfig(idDb: any) {
    return this.httpClient.get<any>(this.rootApiService.URL+`CustomerDbProcess/PopulateDefaultSchemaConfig?dbGuid=` +`${idDb}`,{headers:this.GetHeader()});
  }

  getListDatabaseRegistered(){
    return this.httpClient.get<any>(this.rootApiService.URL+'CustomerDbStatistics/GetStatistics',{headers:this.GetHeader()});
  }

  saveBussinessInformation(idDatabaseRegister:any, obj:any){
    return this.httpClient.post<any>(this.rootApiService.URL+'MasterConfig/CreateMasterConfig?dbGuid='+idDatabaseRegister,obj,{headers:this.GetHeader()});
  }
  saveBussinessName(id: any, databaseName: string) {
    return this.httpClient.put<any>(this.rootApiService.URL + `DbConnection/RegisterBussinessName?dbGuid=${id}&bussinessName=${databaseName}`,{headers:this.GetHeader()});
  }

  registerNewUser(user:User){
    return this.httpClient.post<any>(this.rootApiService.URL+"EasyWebAuth/Register",user);
  }

  uploadLogoBusiness(idDatabaseRegister:any,img:any){
    return this.httpClient.post<any>(this.rootApiService.URL+'MasterConfig/UploadImage?dbGuid='+idDatabaseRegister,{"img":img},{headers:this.GetHeader()});
  }

  getGeneratorProject(idDatabaseRegister:any){
    return this.httpClient.get<any>('http://vuonghuynhsolutions.tech:5000/create-api/' + idDatabaseRegister, { headers: this.GetHeader() });
  }

  getUserInformation() {
    return this.httpClient.get<any>(this.rootApiService.URL+'User',{headers:this.GetHeader()})
  }
}
