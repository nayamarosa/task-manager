import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() { 
    const savedLocalTasksList = localStorage.getItem('tasks');
    const initialLocalTasksList = savedLocalTasksList ? JSON.parse(savedLocalTasksList) : [];
    this.tasksSubject = new BehaviorSubject<Task[]>(initialLocalTasksList);
  }

  private updateLocalTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    const add = [...this.tasksSubject.value, task];
    this.tasksSubject.next(add);
    this.updateLocalTasks(add);
  }

  deleteTask(id: number): void {
    const remove = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(remove);
    this.updateLocalTasks(remove);
  }

  toggleTaskStatus(id: number): void {
    const status = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(status);
    this.updateLocalTasks(status);
  }
}
