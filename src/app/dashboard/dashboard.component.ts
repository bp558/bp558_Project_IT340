import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Needed for ngModel

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
  notes: Note[] = [];

  newTitle = '';
  newContent = '';
  newCategory = 'all';

  addNote() {
    if (!this.newTitle || !this.newContent) return;
    this.notes.push({
      title: this.newTitle,
      content: this.newContent,
      category: this.newCategory
    });
    this.newTitle = '';
    this.newContent = '';
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  setCategory(category: string) {
    this.newCategory = category;
  }

  get filteredNotes() {
    if (this.newCategory === 'all') return this.notes;
    return this.notes.filter(note => note.category === this.newCategory);
  }
}
