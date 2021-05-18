import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ThemeService} from "../ModeUI/theme.service";
import { Observable} from 'rxjs';

@Component({
  selector: 'app-client-cms-generate-table',
  templateUrl: './client-cms-generate-table.component.html',
  styleUrls: ['./client-cms-generate-table.component.scss']
})
export class ClientCMSGenerateTableComponent implements OnInit {
  @Output() nameActionTrigger = new EventEmitter<string>();
  isDarkThemeSubscription:boolean=false;

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
  onClickEdit(){
    this.nameActionTrigger.emit("edit")
  }
  
}
