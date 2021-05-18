import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ThemeService} from '../ModeUI/theme.service';

@Component({
  selector: 'app-client-cms-generated',
  templateUrl: './client-cms-generated.component.html',
  styleUrls: ['./client-cms-generated.component.scss']
})
export class ClientCMSGeneratedComponent implements OnInit {
  isDarkMode:boolean=true;
  actionNameTriggered:string='';
  constructor(private themService:ThemeService) {

   }

  ngOnInit(): void {
  }
  switchMode(){
    this.themService.setDarkTheme(this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
  }
  
  getActionTrigger($event:any){
    this.actionNameTriggered=$event;
    console.log($event)
  }
  onTriggerAction(item:string){
    this.actionNameTriggered=item;
  }
}
