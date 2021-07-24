import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/api/Client/database.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  user = new User('', '', '', '', '');
  mode: boolean = false;
  constructor(private databaseService: DatabaseService) { }
  ngOnInit(): void {
    this.databaseService.getUserInformation().subscribe(ok => {
      this.user = ok
    })
  }
}
