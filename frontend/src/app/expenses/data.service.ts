import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Expense {
  expenseId?: number;
    description: string;
  category: {
categoryName: any; categoryId: number
};
  date: string;
  amount: number;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrlcategory = 'http://localhost:8080/spendwise/category/';
  private apiUrlexpense = 'http://localhost:8080/spendwise/expense';

  constructor(private http: HttpClient) {}
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrlcategory);
  }

  getExpenseById(expenseId: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrlexpense}/${expenseId}`);
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiUrlexpense}/`);
  }


  addExpense(expense: Expense): Observable<Expense> {
    expense.category.categoryId = Number(expense.category.categoryId);
    return this.http.post<Expense>(`${this.apiUrlexpense}/`, expense, this.httpOptions);
  }

  updateExpense(expenseId: number, expense: Expense): Observable<Expense> {
    expense.category.categoryId = Number(expense.category.categoryId);
    return this.http.post<Expense>(`${this.apiUrlexpense}/${expenseId}`, expense);
  }

  deleteExpense( expenseId: number): Observable<Expense> { 
    return this.http.delete<Expense>(`${this.apiUrlexpense}/${expenseId}`);
  }
}
