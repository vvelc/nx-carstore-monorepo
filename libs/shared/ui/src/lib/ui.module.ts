import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from 'primeng/button'

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [CardComponent, ButtonComponent],
  exports: [CardComponent, ButtonComponent],
})
export class UiModule {}
