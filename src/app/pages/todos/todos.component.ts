import { Component } from '@angular/core';

import { TodosService } from '../../modules/todos';

@Component({
  selector: 'todos',
  styleUrls: [ 'todos.component.scss' ],
  templateUrl: './todos.component.html'
})
export class TodosComponent {

  public todos;

  constructor (
    private _todosService: TodosService
  ) {

    _todosService.fetchTodos()
      .then((todos) => {
        this.todos = todos;
      });
  }
}
