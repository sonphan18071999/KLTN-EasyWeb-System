import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-entities',
  templateUrl: './search-entities.component.html',
  styleUrls: ['./search-entities.component.scss']
})
export class SearchEntitiesComponent implements OnInit {
 
  @Output() searchcriteria = new EventEmitter<String>();
  searchword=''
  constructor() { }

  ngOnInit(): void {
  }
  searchThis() {
    this.searchcriteria.emit(this.searchword)
  }
}
