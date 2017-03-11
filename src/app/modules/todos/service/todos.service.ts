import { Injectable } from '@angular/core';

import { RequestService } from '../../../core';

@Injectable()
export class TodosService {

  private _urls = CONFIG.urls;

  constructor (
    private _requestService: RequestService,
  ) {}

  public fetchTodos() {
    return this._requestService.get(this._urls.todos);
  }

  public getTodo(id) {
    return this._requestService.get(this._urls.todos + '/' + id);
  }

  public saveTodo(todo) {
    if (todo._id) {
      const id = todo._id;
      delete todo._id;

      return this._requestService.patch(
        this._urls.todos + '/' + id,
        todo
      );
    } else {
      return this._requestService.post(
        this._urls.todos,
        todo
      );
    }
  }

  public deleteTodo(id) {
    return this._requestService.delete(this._urls.todos + '/' + id);
  }
}
