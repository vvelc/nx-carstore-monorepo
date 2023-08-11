import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, ButtonModule, MenubarModule],
  declarations: [
    CardComponent,
    ButtonComponent,
    HeaderComponent,
    LayoutComponent,
    LayoutComponent,
    FooterComponent,
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    HeaderComponent,
    LayoutComponent,
    LayoutComponent,
    FooterComponent,
  ],
})
export class UiModule {}
