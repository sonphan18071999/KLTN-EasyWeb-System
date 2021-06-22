import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableConfigure } from 'src/app/models/TableConfigure';
import { RootApiService } from '../root-api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigureEntityService {
  token:any;
  headers: HttpHeaders = new HttpHeaders();
  rootApiService = new RootApiService();
  constructor(private httpClient:HttpClient) { }

  GetHeader = (): HttpHeaders => {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.token = localStorage.getItem('token');
    headers = headers.append('Authorization', `Bearer ${this.token}`);
    this.headers = headers;
    return headers;
  }

  updateEntityConfigure(guid:any, entityConfigure:TableConfigure){
    var header = this.GetHeader();
    return this.httpClient.put<TableConfigure>(this.rootApiService.URL + `TableSchemaConfig/UpdateTableConfig?dbGuid=${guid}`,entityConfigure, {headers:header});
  }
}
