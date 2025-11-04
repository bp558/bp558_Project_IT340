import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router) {}

  onSignup() {
    // Later you’ll replace this with a real signup API call
    this.router.navigate(['/dashboard']);
  }
}

