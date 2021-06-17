import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/models/pagination';
import { DatabaseService } from "../../api/Client/database.service"
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  fetchedListDBRegister: [] = [];
  paginationListDBRegistered= [] as  any;;
  pagination: Pagination = { pageIndex: 1, itemsPerPage: 10, totalLength: 1 };
  constructor(private databaseService:DatabaseService) { }

  ngOnInit(): void {
    this.getListDatabaseRegistered();
  }
  async getListDatabaseRegistered() {
    await this.databaseService.getListDatabaseRegistered().subscribe(data => {
      this.fetchedListDBRegister = data
      let page ={previousPageIndex: 0, pageIndex: 1, pageSize: 10, length: 100}
      this.getPaginationListDB(page)
    });
  }
  getPaginationListDB(event: any) {
    console.log(event)
      let startIndex = (event.pageIndex ) * event.pageSize;
      let endIndex = (event.pageIndex) * event.pageSize + event.pageSize;
      this.paginationListDBRegistered = this.fetchedListDBRegister.slice(startIndex, endIndex);
  }
}
