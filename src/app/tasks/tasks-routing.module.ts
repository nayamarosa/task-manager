import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'new', component: TaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
