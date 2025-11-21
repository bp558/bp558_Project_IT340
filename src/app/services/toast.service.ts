import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toast$ = new Subject<{ message: string }>();

  show(message: string) {
    this.toast$.next({ message });
  }
}
