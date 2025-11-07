import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteEditorComponent } from '../note-editor/note-editor.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NoteEditorComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  notes = [
    { id: 1, title: 'Sample Note', content: 'This is an example note.' }
  ];
  filteredNotes = [...this.notes];
  isEditorOpen = false;
  selectedNote: any = { id: null, title: '', content: '' };

  // Open modal for a new note
  openEditor() {
    this.selectedNote = { id: null, title: '', content: '' };
    this.isEditorOpen = true;
  }

  // Edit an existing note
  editNote(note: any) {
    this.selectedNote = { ...note };
    this.isEditorOpen = true;
  }

  // Save note (add or update)
  saveNote(note: any) {
    if (note.id) {
      const index = this.notes.findIndex(n => n.id === note.id);
      if (index !== -1) this.notes[index] = { ...note };
    } else {
      const newNote = { ...note, id: Date.now() };
      this.notes.push(newNote);
    }

    this.filteredNotes = [...this.notes];
    this.isEditorOpen = false;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.filteredNotes = [...this.notes];
  }

  closeEditor() {
    this.isEditorOpen = false;
  }

  setCategory(category: string) {
    console.log('Filter set to:', category);
  }
}
