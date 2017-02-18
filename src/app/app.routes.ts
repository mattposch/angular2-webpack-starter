import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content';
import { ShowroomComponent } from './pages/showroom';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'showroom',  component: ShowroomComponent },
  { path: '**',    component: NoContentComponent },
];
