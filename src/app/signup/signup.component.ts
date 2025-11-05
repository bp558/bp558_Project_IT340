import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newEmail = '';
  newPassword = '';

  onSignup() {
    // Placeholder logic: redirect to dashboard
    console.log('Signup with', this.newEmail, this.newPassword);
  }
}
