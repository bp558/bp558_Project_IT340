import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl = 'http://192.168.56.20:3000/api/notes';

  constructor(private http: HttpClient) {}

  getNotesForDepartment(department: string) {
    return this.http.get<any[]>(this.apiUrl);
  }

  createNote(note: any) {
    return this.http.post(this.apiUrl, note);
  }

  updateNote(id: string, note: any) {
    return this.http.put(`${this.apiUrl}/${id}`, note);
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
