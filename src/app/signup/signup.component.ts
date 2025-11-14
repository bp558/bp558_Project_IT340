import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ for ngModel

@Component({
  selector: 'app-signup',
  standalone: true,      // ✅ standalone component
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  accountType: string = '';

  onSignup() {
    if (this.name && this.email && this.password && this.accountType) {
      console.log('Signing up with:', {
        name: this.name,
        email: this.email,
        password: this.password,
        accountType: this.accountType
      });
      // TODO: Replace this with your signup API call
    } else {
      console.log('Please fill out all fields.');
    }
  }
}
