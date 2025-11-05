import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,         // make standalone
  imports: [RouterModule],  // needed for routerLink and router.navigate
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
