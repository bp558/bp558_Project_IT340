import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteEditorComponent } from '../note-editor/note-editor.component';
import { NotesService } from '../services/notes.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,        // ngIf / ngFor
    FormsModule,         // ngModel
    NoteEditorComponent,  // app-note-editor
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes: any[] = [];
  filteredNotes: any[] = [];

  searchQuery = '';
  category = 'all';

  selectedNote: any = null;
  isEditorOpen = false;

  userEmail = '';
  department = '';

  constructor(
    private notesService: NotesService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();

    if (!user) {
      this.router.navigate(['/']);
      return;
    }

    this.userEmail = user.email;
    this.department = user.department;

    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotesForDepartment(this.department).subscribe({
      next: (data) => {
        this.notes = data;
        this.applyFilters();
      },
      error: (err) => console.error('Error loading notes:', err)
    });
  }

  // -----------------------------
  // FILTERING & SEARCHING
  // -----------------------------
  applyFilters() {
    let filtered = [...this.notes];

    if (this.category !== 'all') {
      filtered = filtered.filter(n => n.category === this.category);
    }

    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q)
      );
    }

    this.filteredNotes = filtered;
  }

  setCategory(cat: string) {
    this.category = cat;
    this.applyFilters();
  }

  // -----------------------------
  // EDITOR BEHAVIOR
  // -----------------------------
  openEditor() {
    this.selectedNote = {
      title: '',
      content: '',
      department: this.department,
      category: 'personal'
    };
    this.isEditorOpen = true;
  }

  editNote(note: any) {
    this.selectedNote = { ...note };
    this.isEditorOpen = true;
  }

  closeEditor() {
    this.isEditorOpen = false;
  }

  saveNote(noteData: any) {
    if (noteData._id) {
      // Update
      this.notesService.updateNote(noteData._id, noteData).subscribe(() => {
        this.loadNotes();
        this.isEditorOpen = false;
      });
    } else {
      // Create
      this.notesService.createNote(noteData).subscribe(() => {
        this.loadNotes();
        this.isEditorOpen = false;
      });
    }
  }

  deleteNote(index: number) {
    const note = this.filteredNotes[index];
    if (!note) return;

    if (!confirm('Delete this note?')) return;

    this.notesService.deleteNote(note._id).subscribe(() => {
      this.loadNotes();
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
