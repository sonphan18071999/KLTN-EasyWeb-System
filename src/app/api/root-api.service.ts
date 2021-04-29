import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootApiService {
  public URL:string;
  constructor() { 
    this.URL ='http://vuonghuynhsolutions.tech/api/'
  }
}
