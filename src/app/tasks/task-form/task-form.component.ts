import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../shared/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {
  newTaskForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private taskService: TaskService,
  ) {
    this.newTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    })
  }

  addTaskBtn() {
    
    const { title, description } = this.newTaskForm.value;
    
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    
    this.taskService.addTask(newTask);
    console.log('Formulário válido, enviar:', this.newTaskForm.value);
  }
}
