import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class RequestService {

  private _headers = {'Content-Type': 'application/json'};
  private _rootUrl = CONFIG.backendUrl;
  private _jwtPrefix = CONFIG.jwtPrefix;

  constructor (
    private _http: Http,
    private _storage: LocalStorageService
  ) {
  }

  public get(url, headers = {}) {
    const fullHeaders = this._prepareHeaders(headers);
    return this._http.get(this._rootUrl + url, fullHeaders)
      .map((response) => response.json())
      .toPromise();
  }

  public post(url, data, headers = {}) {
    const fullHeaders = this._prepareHeaders(headers);
    return this._http.post(this._rootUrl + url, JSON.stringify(data), fullHeaders)
      .map((response) => response.json())
      .toPromise();
  }

  public patch(url, data, headers = {}) {
    const fullHeaders = this._prepareHeaders(headers);
    return this._http.patch(this._rootUrl + url, JSON.stringify(data), fullHeaders)
      .map((response) => response.json())
      .toPromise();
  }

  public delete(url, headers = {}) {
    const fullHeaders = this._prepareHeaders(headers);
    return this._http.delete(this._rootUrl + url, fullHeaders)
      .map((response) => response.json())
      .toPromise();
  }

  private _prepareHeaders(headers) {
    const jwt = this._storage.retrieve('jwt');
    if (jwt) {
      headers['Authorization'] = this._jwtPrefix + ' '
        + this._storage.retrieve('jwt');
    }

    return {headers: new Headers(_.merge(this._headers, headers))};
  }
}
