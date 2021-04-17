import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-client-admin-part02',
  templateUrl: './client-admin-part02.component.html',
  styleUrls: ['./client-admin-part02.component.scss']
})
export class ClientAdminPart02Component implements OnInit {

  constructor() { }
  toppings = new FormControl();
  toppingList: string[] = ['Create', 'Read', 'Update', 'Delete'];

  ngOnInit(): void {
  }

}
