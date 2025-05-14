import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { TaskService } from '../../shared/task.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputComponent } from '../../shared/input/input.component';

class MockTaskService {
  getTasks() {
    return of([
      { id: 1, title: 'Tarefa 1', description: 'Descrição', completed: false },
      { id: 2, title: 'Tarefa 2', description: 'Descrição', completed: true },
    ]);
  }
  toggleTaskStatus(id: number) {}
  deleteTask(id: number) {}
}

class MockRouter {
  navigate(path: string[]) {}
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: MockTaskService;
  let router: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent, ButtonComponent, InputComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: TaskService, useClass: MockTaskService },
        { provide: Router, useClass: MockRouter },
         provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService) as any;
    router = TestBed.inject(Router) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should load tasks on ngOnInit', () => {
    expect(component.taskList.length).toBe(2);
    expect(component.taskList[0].title).toBe('Tarefa 1');
  });

  it('should toggle task status', () => {
    spyOn(taskService, 'toggleTaskStatus');
    component.toggleStatus(1);
    expect(taskService.toggleTaskStatus).toHaveBeenCalledWith(1);
  });

  it('should remove task on click', () => {
    spyOn(taskService, 'deleteTask');
    component.removeTask(1);
    expect(taskService.deleteTask).toHaveBeenCalledWith(1);
  });

  it('should navigate to "add new task" page', () => {
    spyOn(router, 'navigate');
    component.addNewTaskBtn();
    expect(router.navigate).toHaveBeenCalledWith(['/tasks/new']);
  });

  it('should render task list', () => {
    const taskTitles = fixture.debugElement.queryAll(By.css('h2'));
    expect(taskTitles.length).toBe(2);
    expect(taskTitles[0].nativeElement.textContent).toContain('Tarefa 1');
    expect(taskTitles[1].nativeElement.textContent).toContain('Tarefa 2');
  });

});
