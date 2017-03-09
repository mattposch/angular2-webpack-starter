import {
  Component,
  ViewEncapsulation
} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.component.scss',
    '../../node_modules/primeng/resources/primeng.css',
    '../../node_modules/primeng/resources/themes/omega/theme.css',
  ],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}
