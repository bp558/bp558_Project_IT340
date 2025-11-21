import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  @Input() note = { id: null, title: '', content: '' };

  // 👇 This fixes your error
  @Output() closeEditor = new EventEmitter<void>();

  @Output() save = new EventEmitter<any>();

  saveNote() {
    this.save.emit(this.note);
  }
}
