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
  @Input() note: any = { title: '', content: '', department: '' };
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  constructor(
    private notesService: NotesService,
    private toast: ToastService
  ) {}

  saveNote() {
    if (!this.note.title || !this.note.content) {
      this.toast.show('Please enter a title and content');
      return;
    }

    // Make sure department is set
    if (!this.note.department) {
      this.toast.show('Error: note department not set');
      return;
    }

    const request = this.note._id
      ? this.notesService.updateNote(this.note._id, this.note)
      : this.notesService.createNote(this.note);

    request.subscribe({
      next: (res) => {
        this.toast.show('Note saved!');
        this.save.emit(res);     // send saved note to parent
        this.cancel.emit();      // auto-close editor
      },
      error: (e) => {
        this.toast.show('Error saving note');
        console.error(e);
      }
    });
  }

  closeEditor() {
    this.cancel.emit();
  }
}
