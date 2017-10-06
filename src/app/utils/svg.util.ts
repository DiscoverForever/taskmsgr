import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * 加载svg
 * @export
 * @param {MdIconRegistry} ir 
 * @param {DomSanitizer} ds 
 */
export function loadSvgResources(ir: MdIconRegistry, ds: DomSanitizer) {
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
}