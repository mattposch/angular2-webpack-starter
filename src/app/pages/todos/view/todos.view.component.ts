import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TodosService } from '../../../modules/todos';

@Component({
  selector: 'todos-view',
  styleUrls: [ 'todos.view.component.scss' ],
  templateUrl: './todos.view.component.html'
})
export class TodosViewComponent {

  public todo;

  constructor (
    private _todosService: TodosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    _route.params.subscribe((params) => {
      _todosService.getTodo(params['id'])
        .then((todo) => {
          this.todo = todo;
        });
    });
  }

  public deleteTodo(todoId) {
    this._todosService.deleteTodo(todoId)
      .then(() => {
        this._router.navigateByUrl('/todos');
      });
  }
}
