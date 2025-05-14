import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'primary' | 'secondary' | 'icon' | '' = 'primary';

  @Output() handleClick = new EventEmitter<void>();

  onClick() {
    this.handleClick.emit();
  }
}
