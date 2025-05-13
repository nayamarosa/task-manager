import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() { }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(task: Task): void {
    const add = [...this.tasksSubject.value, task];
    this.tasksSubject.next(add);
  }

  deleteTask(id: number): void {
    const remove = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(remove);
  }

  toggleTaskStatus(id: number): void {
    const status = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(status);
  }
}
