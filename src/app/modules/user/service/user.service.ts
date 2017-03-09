import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { ConfigService } from '@nglibs/config';
import { RequestService } from '../../../core';

@Injectable()
export class UserService {

  private _urls;

  constructor (
    private _requestService: RequestService,
    private _storage: LocalStorageService,
    private readonly _config: ConfigService
  ) {
    this._urls = _config.getSettings().urls;
  }

  public login(loginData) {
    this._requestService.post(
      this._urls.login,
      loginData
    )
    .subscribe((response) => {
      this._storage.store('jwt', response.json().token);

      // this._requestService.get(this._urls.me)
      //   .subscribe((user) => {
      //     console.log('user', user.json());
      //   });
    });
  }

}

