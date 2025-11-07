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
    { title: 'Sample Note', content: 'This is an example note.' }
  ];
  filteredNotes = this.notes;
  isEditorOpen = false;
  selectedNote: any = null;
  searchQuery = '';

  openEditor() {
    this.selectedNote = null;
    this.isEditorOpen = true;
  }

  editNote(note: any) {
    this.selectedNote = { ...note };
    this.isEditorOpen = true;
  }

  saveNote(note: any) {
    if (this.selectedNote) {
      // Editing an existing note
      const index = this.notes.findIndex(
        n => n.title === this.selectedNote.title && n.content === this.selectedNote.content
      );
      if (index !== -1) this.notes[index] = { ...note };
    } else {
      // Adding a new note
      this.notes.push({ ...note });
    }

    this.filteredNotes = [...this.notes];
    this.closeEditor();
  }

  deleteNote(i: number) {
    this.notes.splice(i, 1);
    this.filteredNotes = [...this.notes];
  }

  closeEditor() {
    this.isEditorOpen = false;
    this.selectedNote = null;
  }

  setCategory(category: string) {
    // Placeholder - later we can filter by category
    console.log(`Filter set to: ${category}`);
  }
}
