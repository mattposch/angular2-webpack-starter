import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { AppState } from '../../../app.service';
import { UserService } from '../../../modules/user';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class BaseLayoutComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public userName = '';

  constructor(
    public appState: AppState,
    private _storage: LocalStorageService,
    private _userService: UserService
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    const user = this._storage.retrieve('user');
    if (!!user) {
      this.userName = user.firstname + ' ' + user.lastname;
    }
  }

  public logout() {
    console.log('log me out');
    this._userService.logout();
  }

}
