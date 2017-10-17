import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: '项目名称',
      coverImg: 'assets/img/covers/1_tn.jpg',
      desc: '项目描述'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
