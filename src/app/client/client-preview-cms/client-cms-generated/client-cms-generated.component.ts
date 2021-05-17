import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../ModeUI/theme.service';

@Component({
  selector: 'app-client-cms-generated',
  templateUrl: './client-cms-generated.component.html',
  styleUrls: ['./client-cms-generated.component.scss']
})
export class ClientCMSGeneratedComponent implements OnInit {

  isDarkMode:boolean=true;
  constructor(private themService:ThemeService) {

   }

  ngOnInit(): void {
  }
  switchMode(){
    this.isDarkMode = !this.isDarkMode;
    this.themService.setDarkTheme(this.isDarkMode);
  }
}
