import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/api/Client/database.service';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent implements OnInit {

  user: any={};

  constructor(private databaseService: DatabaseService) { }
  
  async ngOnInit(): Promise<void> {
    await this.databaseService.getUserInformation().subscribe(ok => {
      this.user = ok
    })
  }

}
