import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://dummyapi.io/api/v1/users'; // Replace with your mock API URL

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.apiUrl)
      .pipe(
        map(response => response), // Optionally modify response data
        catchError(error => {
          return throwError(error); // Re-throw error for handling in the component
        })
      );
  }
}
