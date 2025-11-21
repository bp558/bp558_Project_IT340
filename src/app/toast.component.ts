import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" *ngIf="message">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  message: string | null = null;
  timeout: any;

  constructor(private toast: ToastService) {
    this.toast.toast$.subscribe(data => {
      this.message = data.message;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.message = null;
      }, 2000);
    });
  }
}
