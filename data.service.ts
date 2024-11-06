import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = 'http://localhost:5000/api'

  constructor(private http: HttpClient) {}

  saveUser(userData: {name:string, email:string}): Observable<any> {
      return this.http.post(`${this.apiURL}/users`, userData)
  }
}
