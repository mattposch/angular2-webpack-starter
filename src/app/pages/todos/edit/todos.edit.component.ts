import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { TodosService } from '../../../modules/todos';

@Component({
  selector: 'todos-edit',
  styleUrls: [ 'todos.edit.component.scss' ],
  templateUrl: './todos.edit.component.html'
})
export class TodosEditComponent {

  public todo = {
    text: ''
  };

  private _todoId;

  constructor (
    private _todosService: TodosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    _route.params.subscribe((params) => {
      if (!params['id']) {
        return;
      }
      this._todoId = params['id'];
      _todosService.getTodo(params['id'])
        .then((todo) => {
          this.todo = todo;
        });
    });
  }

  public save() {
    this._todosService.saveTodo(this.todo)
      .then(() => {
        this._router.navigateByUrl('/todos');
      });
  }

  public cancel() {
    this._router.navigateByUrl('/todos/' + this._todoId);
  }

}

