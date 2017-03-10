import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ConfigService } from '@nglibs/config';
import { Router } from '@angular/router';

import { RequestService } from '../../../core';

@Injectable()
export class UserService {

  private _urls;

  constructor (
    private _requestService: RequestService,
    private _storage: LocalStorageService,
    private _config: ConfigService,
    private _router: Router
  ) {
    this._urls = _config.getSettings().urls;
  }

  public login(loginData) {

    this._requestService.post(
      this._urls.login,
      loginData
    )
      .then((response) => {
        this._storage.store('jwt', response.token);

        return this._requestService.get(this._urls.me);
      })
      .then((user) => {
        console.log('user', user);
        this._storage.store('user', user);
        this._router.navigateByUrl('/');
      });
  }

  public logout() {
    this._storage.clear('user');
    this._storage.clear('jwt');
    this._router.navigateByUrl('/login');
  }

}

