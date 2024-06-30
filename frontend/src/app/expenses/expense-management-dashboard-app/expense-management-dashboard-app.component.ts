import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, DataService, Expense } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface FormData {
  description: string;
  category: Category | null;
  date: string;
  amount: number | null;
}


@Component({
  selector: 'app-expense-management-dashboard-app',
  templateUrl: './expense-management-dashboard-app.component.html',
  styleUrls: ['./expense-management-dashboard-app.component.css']
})
export class ExpenseManagementDashboardAppComponent implements OnInit {
  expenses: Expense[] = [];
  // pageSizeOptions: number[] = [5, 10, 15];
  // itemsPerPage = 10;
  // currentPage = 1;
  // selectedCategory = 'all';
  // startDate?: string;
  // endDate?: string;
  categories: Category[] = [];
  formData: FormData = {
    description: '',
    category: null, 
    date: '',
    amount: null,
  };


  constructor(private dataService: DataService, private router: Router, private http: HttpClient,     private route: ActivatedRoute // Add ActivatedRoute to your imports
) {}

  ngOnInit(): void {
    this.loadAllExpenses();
    this.loadCategories();
  }

  loadAllExpenses(): void {
    this.dataService.getExpenses().subscribe(data => {
      console.log(data);
      this.expenses = data;

      this.expenses.forEach(expense => {
        let expenseId = expense.expenseId;
        console.log('Expense ID:', expenseId);
        
      }); 

    });
  }

  loadCategories(): void {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  // applyFilters(): void {
  //   let filteredExpenses = this.expenses;

  //   if (this.selectedCategory !== 'all') {
  //     filteredExpenses = filteredExpenses.filter(expense => expense.category.categoryId.toString() === this.selectedCategory);
  //   }


  //   this.expenses = filteredExpenses;
  //   this.paginateExpenses();
  // }

  deleteExpense(expenseId: number): void {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.dataService.deleteExpense(expenseId).subscribe({
        next: () => {
          console.log('Expense deleted successfully');
          this.loadAllExpenses();
        },
        error: (error: any) => {
          console.error('Error deleting expense', error);
        }
      });
    }
  }

  editExpense(expenseId: number): void {
    this.dataService.getExpenses().subscribe(
      (expenses) => {
        const selectedExpense = expenses.find(expense => expense.expenseId === expenseId);
        if (selectedExpense) {
          this.router.navigate(['spendwise/expense/edit', expenseId], { state: { expense: selectedExpense } });
        } else {
          console.error('Expense not found');
        }
      },
      (error: any) => {
        console.error('Error fetching expenses:', error);
      }
    );
  }

  // paginateExpenses(): void {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   this.paginatedExpenses = this.expenses.slice(startIndex, startIndex + this.itemsPerPage);
  // }

  // changePage(pageEvent: PageEvent): void {
  //   this.currentPage = pageEvent.pageIndex + 1;
  //   this.itemsPerPage = pageEvent.pageSize;
  //   this.paginateExpenses();
  // }

  // changeItemsPerPage(num: number): void {
  //   this.itemsPerPage = num;
  //   this.paginateExpenses();
  // }

  // filterExpenses(): void {
  //   this.applyFilters();
  // }
}
