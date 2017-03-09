import { Component } from '@angular/core';
import { UserService } from '../../modules/user';

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.scss' ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor (
    private _userService: UserService
  ) {}

  public onSubmit(formValues) {
    console.log('submit', formValues);
    this._userService.login(formValues);
  }

}
