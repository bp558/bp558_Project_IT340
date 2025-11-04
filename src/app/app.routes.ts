import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard },
];
