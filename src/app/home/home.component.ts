import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ import FormsModule here

@Component({
  selector: 'app-home',
  standalone: true,           // ✅ mark as standalone component
  imports: [FormsModule],     // ✅ register FormsModule for ngModel
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Logging in with:', this.email, this.password);
      // TODO: Add actual authentication logic here
    } else {
      console.log('Please fill out all fields.');
    }
  }
}
