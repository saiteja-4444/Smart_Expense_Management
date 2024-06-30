
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const API_URL = 'http://localhost:8080/spendwise/register/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }


  //add user


  addUser(user: { firstName: string; lastName: string; email: string; password: string }): Observable<any> {
    return this.http.post(API_URL, user)
      }


  
}