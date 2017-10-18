import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InvateComponent } from '../invate/invate.component';
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
    },
    {
      name: '项目名称',
      coverImg: 'assets/img/covers/1_tn.jpg',
      desc: '项目描述'
    },
    
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: 'this is my dialog'});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  lanuchInviteDialog() {
    const dialogRef = this.dialog.open(InvateComponent, {data: 'this is my dialog'});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
