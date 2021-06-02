import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../api/Client/database.service"
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  listDBRegistered:any;
  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
      this.getListDatabaseRegistered();
  }
  async getListDatabaseRegistered(){
    return await this.databaseService.getListDatabaseRegistered().subscribe(listItem=>{
      this.listDBRegistered=listItem;
      console.log(this.listDBRegistered);
    })
  }
}
