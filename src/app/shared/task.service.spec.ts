import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;

  const mockTask: Task = {
    id: 1,
    title: 'Tarefa Teste',
    description: 'Descrição teste',
    completed: false,
  };

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start empty list', (done) => {
    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(0);
      done();
    });
  });

  it('should add new task', (done) => {
    service.addTask(mockTask);

    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual(mockTask);
      done();
    });
  });

  it('should delete task', (done) => {
    service.addTask(mockTask);
    service.deleteTask(mockTask.id);

    service.getTasks().subscribe((tasks) => {
      expect(tasks.length).toBe(0);
      done();
    });
  });

  it('should change task status', (done) => {
    service.addTask(mockTask);
    service.toggleTaskStatus(mockTask.id);

    service.getTasks().subscribe((tasks) => {
      expect(tasks[0].completed).toBeTrue();
      done();
    });
  });

});
