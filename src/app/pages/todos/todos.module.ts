import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared';

import { routes } from './todos.routes';
import { TodosComponent } from './todos.component';
import { TodosViewComponent } from './view/todos.view.component';
import { TodosEditComponent } from './edit/todos.edit.component';

@NgModule({
  declarations: [
    TodosComponent,
    TodosViewComponent,
    TodosEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class TodosPages {}
