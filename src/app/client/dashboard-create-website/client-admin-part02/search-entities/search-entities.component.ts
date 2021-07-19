import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-entities',
  templateUrl: './search-entities.component.html',
  styleUrls: ['./search-entities.component.scss']
})
export class SearchEntitiesComponent implements OnInit {
 
  @Output() searchCriteria = new EventEmitter<String>();
  searchWord=''
  constructor() { }

  ngOnInit(): void {
  }
  searchThis() {
    this.searchCriteria.emit(this.searchWord)
  }
}
