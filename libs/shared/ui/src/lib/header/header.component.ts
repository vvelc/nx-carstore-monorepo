import { Component, ContentChild, ViewEncapsulation, TemplateRef } from "@angular/core";

export interface NavLink { 
  label:string, 
  url:string 
}

@Component({
  selector: 'ncm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @ContentChild('headerLogo', {read: TemplateRef}) logoRef!: TemplateRef<any>
  @ContentChild('headerNavLinks', {read: TemplateRef}) navLinksRef!: TemplateRef<any>

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(){}
}