import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../services/notes.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {

  // note can be: new note OR existing note
  @Input() note: any = {
    _id: null,
    title: '',
    content: ''
  };

  @Output() closeEditor = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();   // notify dashboard

  constructor(
    private notesService: NotesService,
    private toast: ToastService
  ) {}

  saveNote() {
    if (!this.note.title || !this.note.content) return;

    const request = this.note._id
      ? this.notesService.updateNote(this.note._id, this.note)
      : this.notesService.createNote(this.note);

    request.subscribe({
      next: () => {
        this.toast.show('Note saved!');
        this.save.emit();
        this.closeEditor.emit();   // notify parent
      },
      error: (e) => {
        console.error(e);
        this.toast.show('Error saving note');
      }
    });
  }
}
