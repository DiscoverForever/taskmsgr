import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * 加载svg
 * @export
 * @param {MdIconRegistry} ir 
 * @param {DomSanitizer} ds 
 */
export function loadSvgResources(ir: MdIconRegistry, ds: DomSanitizer) {
  const imgDir = 'assets/img';
  const sidebarDir = 'assets/img/sidebar';
  const dayDir = 'assets/img/days';
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  days.forEach(day => {
    ir.addSvgIcon(`day${day}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`));
  });
}