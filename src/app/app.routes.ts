import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';
import { ShowroomComponent } from './pages/showroom';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'showroom',  component: ShowroomComponent },

  { path: 'todos',
    loadChildren: './pages/todos#TodosPages'
  },

  { path: '**',    component: NoContentComponent },
];
