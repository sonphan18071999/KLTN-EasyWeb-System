import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Output() currentPart = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  switchComponent(order:any){
    this.currentPart.emit(order)
  }
}
