import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppState } from '../../app.service';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class BaseLayoutComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
