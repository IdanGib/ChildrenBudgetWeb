import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  parentInfo() {
    const url = 'http://localhost:3000/v1/parents?id=5b2c77ed-615b-4fb4-a825-7f6371d2ba19';
    return this.http.get(url, { withCredentials: true });
  }
}
