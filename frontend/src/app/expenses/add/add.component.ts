import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DataService, Category, Expense } from '../data.service';

interface FormData {
  description: string;
  category: Category | null;
  date: string;
  amount: number | null;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent implements OnInit {
  formData: FormData = {
    description: '',
    category: null, 
    date: '',
    amount: null,
  };

  categories: Category[] = [];

  constructor(private notification: NzNotificationService, private router: Router, private http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  saveData() {
    if (this.validateForm()) {
      
      console.log('Form data is valid. Saving data:', this.formData);
  
      const expense: Expense = {
        description: this.formData.description,
        category: this.formData.category ?? { categoryId: 0, categoryName : "" },
        date: this.formData.date,
        amount: this.formData.amount ?? 0,
      };
  
      this.dataService.addExpense(expense).subscribe(
        () => {
          this.notification.success('Success', 'Expense added successfully',  { nzDuration: 5000 });
          this.router.navigateByUrl('/spendwise/expense-dashboard');
        },
        (error: HttpErrorResponse) => {
          this.notification.error('Error', 'Failed to add expense');
          console.error('Error adding expense:', error);
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
    if (!this.formData.category || !this.formData.category.categoryId) {
      isValid = false;
      console.log('Please select category');
    }
    if (!this.formData.date) {
      isValid = false;
    }
    
    const amount: number = this.formData.amount ?? 0;
    if (isNaN(amount) || amount <= 0) {
      isValid = false;
    }
    return isValid;
  }
}
