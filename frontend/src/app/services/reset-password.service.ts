import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
interface User {
  email: string;
  password: string;
}
 
interface ResetRequest {
  email: string;
  password: string;
}
 
interface UserResponse {
  success?: boolean;
  message?: string;
}
 
@Injectable({
  providedIn: 'root' // Adjust provider scope as needed
})
export class ResetPasswordService {
 
  private resetUrl = `http://localhost:8080/spendwise/register/users/updatePassword`;
 
  constructor(private http: HttpClient) { }
 
  resetPassword(data: ResetRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.resetUrl, data)
  }
}
