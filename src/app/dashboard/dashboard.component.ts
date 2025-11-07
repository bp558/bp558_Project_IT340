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
  // === Data ===
  notes = [
    { id: 1, title: 'Sample Note', content: 'This is an example note.' }
  ];
  filteredNotes = [...this.notes];

  // === State ===
  isEditorOpen = false;
  selectedNote: any = { id: null, title: '', content: '' };
  searchQuery = ''; // 👈 This was missing and caused your TS2339 error

  // === Methods ===
  openEditor() {
    this.selectedNote = { id: null, title: '', content: '' };
    this.isEditorOpen = true;
  }

  editNote(note: any) {
    this.selectedNote = { ...note };
    this.isEditorOpen = true;
  }

  saveNote(note: any) {
    if (note.id) {
      // Update existing note
      const index = this.notes.findIndex(n => n.id === note.id);
      if (index !== -1) this.notes[index] = { ...note };
    } else {
      // Add new note
      const newNote = { ...note, id: Date.now() };
      this.notes.push(newNote);
    }

    // Refresh dashboard
    this.filteredNotes = [...this.notes];
    this.closeEditor();
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
