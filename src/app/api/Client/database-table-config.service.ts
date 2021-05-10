import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootApiService } from '../root-api.service';

@Injectable({
  providedIn: 'root'
})

export class DatabaseTableConfigService {
  token:any;
  headers: HttpHeaders = new HttpHeaders();
  rootApiService = new RootApiService();

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

  getTableConfig(guid:any){
    var header = this.GetHeader();
    return this.httpClient.get<any>(this.rootApiService.URL + `TableSchemaConfig/GetAllTableConfig?dbGuid=${guid}`, {headers:header})
  }
}
