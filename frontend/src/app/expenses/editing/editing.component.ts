import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Category, DataService, Expense } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent implements OnInit {
  formData = {
    description: '',
    category: { categoryId: 0 },
    date: '',
    amount: 0
  };
  categories: Category[] = [];
  expenseId!: number;

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private http: HttpClient,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.expenseId = params['id'];
      this.fetchExpenseDetails(this.expenseId);
    });

    this.dataService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  fetchExpenseDetails(expenseId: number) {
    console.log('Fetching expense details for ID:', expenseId);
    this.dataService.getExpenseById(expenseId).subscribe(
      (expense: Expense) => {
        console.log('Expense details fetched:', expense);
        this.formData = {
          description: expense.description,
          category: { categoryId: expense.category.categoryId },
          date: expense.date,
          amount: expense.amount
        };
      },
      (error) => {
        console.error('Error fetching expense details:', error);
      }
    );
  }
  
  saveData() {
    if (this.validateForm()) {
      const expense: Expense = {
        description: this.formData.description,
        category: {
          categoryId: this.formData.category.categoryId,
          categoryName: null,
        },
        date: this.formData.date,
        amount: this.formData.amount,
      };
 
      this.dataService.updateExpense(this.expenseId, expense).subscribe(
        (response: Expense) => {
          this.notification.success('Success', 'Expense updated successfully', { nzDuration: 5000 });
          this.router.navigateByUrl('/spendwise/expense-dashboard');
        },
        (error: HttpErrorResponse) => {
          this.notification.error('Error', 'Failed to update expense');
          console.error('Error updating expense:', error);
        }
      );
    } else {
      this.notification.error('Error', 'Please fill all the fields correctly');
    }
  }
 
  

  validateForm(): boolean {
    let isValid = true;
    if (this.formData.description.trim().length < 3) {
      isValid = false;
    }
    if (!this.formData.category.categoryId) {
      isValid = false;
    }
    if (!this.formData.date) {
      isValid = false;
    }
    if (isNaN(this.formData.amount) || this.formData.amount <= 0) {
      isValid = false;
    }
    return isValid;
  }
}