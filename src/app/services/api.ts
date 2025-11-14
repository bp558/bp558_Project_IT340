import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://192.168.56.20:3000'; // your backend VM IP + port

  constructor(private http: HttpClient) {}

  // Example: get all notes
  getNotes(): Observable<any> {
    return this.http.get(`${this.backendUrl}/api/notes`);
  }

  // Example: create a new note
  createNote(noteData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/api/notes`, noteData);
  }

  // Add more routes as needed...
}
