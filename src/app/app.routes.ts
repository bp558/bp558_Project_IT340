import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },            // login page
  { path: 'signup', component: SignupComponent },    // signup page
  { path: 'dashboard', component: DashboardComponent }, // dashboard
  { path: '**', redirectTo: '' }                     // fallback
];
