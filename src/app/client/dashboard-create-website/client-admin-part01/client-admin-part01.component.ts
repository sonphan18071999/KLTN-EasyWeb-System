import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-client-admin-part01',
  templateUrl: './client-admin-part01.component.html',
  styleUrls: ['./client-admin-part01.component.scss']
})
export class ClientAdminPart01Component implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Create', 'Read', 'Update', 'Delete'];
  constructor() { }

  ngOnInit(): void {
  }

}
