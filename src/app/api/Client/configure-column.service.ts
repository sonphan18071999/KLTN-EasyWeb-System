import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColumnsTable } from 'src/app/models/ColumnsTable';
import { TableConfigure } from 'src/app/models/TableConfigure';
import { RootApiService } from '../root-api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigureColumnService {
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

  updateColumnConfigure(guid:any, columnConfigure:ColumnsTable){
    var header = this.GetHeader();
    return this.httpClient.put<TableConfigure>(this.rootApiService.URL + `TableColumnSchema/UpdateTableColumnConfig?dbGuid=${guid}`,columnConfigure, {headers:header});
  }
}
