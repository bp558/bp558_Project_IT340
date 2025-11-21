import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {

  @Input() note: any = null;
  @Output() saved = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  constructor(private notesService: NotesService) {}

  saveNote() {
    if (this.note._id) {
      this.notesService.updateNote(this.note._id, this.note).subscribe({
        next: () => this.saved.emit()
      });
    } else {
      this.notesService.createNote(this.note).subscribe({
        next: () => this.saved.emit()
      });
    }
  }

  closeEditor() {
    this.closed.emit();
  }
}
