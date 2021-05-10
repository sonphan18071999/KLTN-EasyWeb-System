import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-cms-generate-table',
  templateUrl: './client-cms-generate-table.component.html',
  styleUrls: ['./client-cms-generate-table.component.scss']
})
export class ClientCMSGenerateTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
}
