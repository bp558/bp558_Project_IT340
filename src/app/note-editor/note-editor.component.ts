import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  @Input() note = { title: '', content: '' };
  @Output() save = new EventEmitter<{ title: string; content: string }>();
  @Output() cancel = new EventEmitter<void>();

  saveNote() {
    if (this.note.title.trim() || this.note.content.trim()) {
      this.save.emit({ ...this.note });
    }
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
