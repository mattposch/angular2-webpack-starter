import { TodosComponent } from './todos.component';
import { TodosViewComponent } from './view/todos.view.component';
import { TodosEditComponent } from './edit/todos.edit.component';

export const routes = [
  { path: '', component: TodosComponent },
  { path: 'new', component: TodosEditComponent },
  { path: ':id', component: TodosViewComponent },
  { path: ':id/edit', component: TodosEditComponent },
];
