import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,          // make standalone
  imports: [RouterModule],   // needed for routerLink and router.navigate
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
