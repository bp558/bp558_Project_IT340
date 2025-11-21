import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email = '';
  password = '';
  accountType = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSignup() {
    const payload = {
      email: this.email,
      password: this.password,
      department: this.accountType
    };

    this.auth.register(payload).subscribe({
      next: () => {
        console.log("Signup successful");
        this.router.navigate(['/']); // back to login
      },
      error: (err:any) => console.error("Signup failed:", err.error)
    });
  }
}

