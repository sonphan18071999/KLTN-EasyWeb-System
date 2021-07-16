import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  isLogged:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  navigateToCommunity() {
    window.location.href="https://easy-web-blog.herokuapp.com"
  }
}
