import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,            // <-- mark as standalone
  imports: [RouterModule],     // <-- allow routerLink and router-outlet
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
