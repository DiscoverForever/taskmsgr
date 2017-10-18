import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invate',
  templateUrl: './invate.component.html',
  styleUrls: ['./invate.component.scss']
})
export class InvateComponent implements OnInit {
  items = [
    {
      name: '1111'
    },
    {
      name: '1111'
    },
    {
      name: '1111'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick() {

  }
  displayUser(user: {id: string, name: string}) {
    return user ? user.name : '';
  }
}
