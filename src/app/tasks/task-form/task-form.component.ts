import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {
  newTaskForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.newTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    })
  }

  sendFormBtn() {
    console.log('Formulário válido, enviar:', this.newTaskForm.value);
  }
}
