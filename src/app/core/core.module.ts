import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpModule } from "@angular/http";
import { SharedModule } from "../shared/shared.module";
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { loadSvgResources } from "../utils/svg.util";
@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('CoreModule模块已经存在!');
    }
    loadSvgResources(ir, ds);
  }
}
