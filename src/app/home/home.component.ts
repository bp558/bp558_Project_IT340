import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  login() {
    // Here you would validate credentials
    // For now, just navigate to dashboard
    this.router.navigate(['/dashboard']);
  }
}

