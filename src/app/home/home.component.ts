import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.auth.login(payload).subscribe({
      next: (res: any) => {
        // Save token
        this.auth.saveToken(res.token);

        // Decode token to get user info
        const payloadData = JSON.parse(atob(res.token.split('.')[1]));
        const user = {
          email: payloadData.email || '',       // email from token
          department: payloadData.department    // department from token
        };
        localStorage.setItem('user', JSON.stringify(user));

        // Navigate to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => console.error("Login error:", err.error)
    });

  }
}
