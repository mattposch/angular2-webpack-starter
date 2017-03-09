import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class UserService {

  private _headers = new Headers({'Content-Type': 'application/json'});

  constructor (
    private _http: Http,
    private _storage: LocalStorageService
  ) {}

  public login(loginData) {
    console.log('UserService.login', loginData.email, loginData.password);

    this._http.post(
      'http://localhost:4000/api/users/login',
      JSON.stringify(loginData),
      {headers: this._headers}
    )
    .subscribe((response) => {
      console.log('got response', response.json());
      this._storage.store('jwt', response.json().token);

      this._headers.append('Authorization', 'JWT ' + this._storage.retrieve('jwt'));
      this._http.get(
        'http://localhost:4000/api/users/me',
        {headers: this._headers}
      )
      .subscribe((user) => {
        console.log('user', user.json());
      });
    });
  }

}

