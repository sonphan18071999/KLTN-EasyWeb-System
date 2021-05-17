import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../ModeUI/theme.service";
import { Observable} from 'rxjs';

@Component({
  selector: 'app-client-cms-generate-table',
  templateUrl: './client-cms-generate-table.component.html',
  styleUrls: ['./client-cms-generate-table.component.scss']
})
export class ClientCMSGenerateTableComponent implements OnInit {
  isDarkThemeSubscription:boolean=false;
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(
    private themeService: ThemeService
  ) {
    this.checkTheme();
  }
  checkTheme(){
    this.themeService.getDarkTheme().subscribe(ok=>{
      this.isDarkThemeSubscription=ok;
    })
  }  
  
  ngOnInit(): void {
  }
  
}
