import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../shared/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit {
  statusForm: FormGroup;
  taskList: Task[] = [];

  constructor(
    private fb:FormBuilder,
    private taskService: TaskService,
    private router: Router,
  ) {
    this.statusForm = this.fb.group({
      status: [false],
    })
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.taskList = tasks;
    });
  }

  toggleStatus(id: number): void {
    this.taskService.toggleTaskStatus(id);
  }

  removeTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  addNewTaskBtn() {
    this.router.navigate(['/tasks/new']);
  }
}
