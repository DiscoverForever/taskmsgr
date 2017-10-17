import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InvateComponent } from './invate/invate.component';
import { ProjectRoutingModule } from "./project-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent, InvateComponent],
  entryComponents: [NewProjectComponent, InvateComponent]
})
export class ProjectModule { }
