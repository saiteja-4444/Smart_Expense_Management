import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private apiurl = 'http://localhost:8080/spendwise/register/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      
    });
    return this.http.post<any>(this.apiurl,{ email, password},{headers});
    catchError(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
     
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}