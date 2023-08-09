import { Component, Input } from '@angular/core';

@Component({
  selector: 'ncm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label = '';
  @Input() icon = '';
}
