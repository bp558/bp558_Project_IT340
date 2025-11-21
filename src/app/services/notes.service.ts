import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private apiUrl = 'http://192.168.56.20:3000/api/notes'; // backend VM

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getNotes(): Observable<any> {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }

  createNote(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload, this.getAuthHeaders());
  }

  updateNote(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, payload, this.getAuthHeaders());
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
