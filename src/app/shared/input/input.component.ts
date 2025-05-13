import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent {
  @Input() label: string = '';
  @Input() type: 'text' | 'checkbox' = 'text';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  @Output() handleChange= new EventEmitter<string>();

  onInputChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.handleChange.emit(value);
  }
}
