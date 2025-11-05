import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Needed for ngModel

interface Note {
  title: string;
  content: string;
  category: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Array of notes
  notes: Note[] = [];

  // Bindings for new note
  newTitle = '';
  newContent = '';
  newCategory = 'all';

  // Add a new note
  addNote() {
    if (this.newTitle && this.newContent) {
      this.notes.push({
        title: this.newTitle,
        content: this.newContent,
        category: this.newCategory
      });
      this.newTitle = '';
      this.newContent = '';
    }
  }

  // Delete a note
  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  // Filter notes by category
  get filteredNotes() {
    if (this.newCategory === 'all') return this.notes;
    return this.notes.filter(n => n.category === this.newCategory);
  }

  // Change category filter
  setCategory(cat: string) {
    this.newCategory = cat;
  }
}
