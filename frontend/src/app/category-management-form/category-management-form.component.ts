import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-management-form',
  templateUrl: './category-management-form.component.html',
  styleUrls: ['./category-management-form.component.css'] 
})
export class CategoryManagementFormComponent {
  categories: { categoryId: number, categoryName: string, editing: boolean, newName?: string }[] = [];
  newCategoryName: string = '';
  errorMsg: string = '';
  isError: boolean = false;

  constructor(private http: HttpClient) {}
 
// this hook on will call fetchCategories to fetch data form backend Api on Component initialization
  ngOnInit() {
    this.fetchCategories();
  }

// function will send an http get request to fetch the categories from Backend Api
  fetchCategories() {
    this.http.get<any[]>('http://localhost:8080/spendwise/category/')
      .subscribe({
        next: (categories: any[]) => {
          this.categories = categories;
          console.log(this.categories); 
        },
        error: (httpErr: HttpErrorResponse) => {
          console.log(httpErr.status + ':' + httpErr.message);
          this.errorMsg = 'Something went wrong...please try later';
          this.isError = true;
        }
      });
  }
// function will send an http post request to Backend Api to add the given category
  addCategory() {
    console.log("New Category Name:", this.newCategoryName);
    if (this.newCategoryName.trim() !== '') {
      this.http.post<any>('http://localhost:8080/spendwise/category/', { categoryName: this.newCategoryName })
        .subscribe({
          next: (categories: any[]) => {
            this.newCategoryName = '';
            this.fetchCategories();
            console.log("post request send"); 
          },
          error: (httpErr: HttpErrorResponse) => {
            if (httpErr.error && httpErr.error.error) {
              this.errorMsg = httpErr.error.error;
            } else {
              this.errorMsg = 'Something went wrong...please try later';
            }
            alert(this.errorMsg);
          }
        });
    } 
  }
  
  // function will display a dialog asking the user to confirm the delete request
  confirmDelete(categoryId:number){
    if(confirm("Are you sure you want to delete this Category ?")){
       this.deleteCategory(categoryId);
    }
  }
  
// function will send an http delete request to Backend Api to delete the given category by id
  deleteCategory(categoryId: number) {
    this.http.delete(`http://localhost:8080/spendwise/category/${categoryId}`)
      .subscribe({
        next: () => {
          this.fetchCategories();
        },
        error: (httpErr: HttpErrorResponse) => {
          console.log(httpErr.status + ':' + httpErr.message);
          this.errorMsg = 'Something went wrong...please try later';
          this.isError = true;
        }
      });
  }

  // function will toggle the editing option and will call the updateCategory to update the existing category
  toggleEdit(category: any) {
    category.editing = !category.editing;
    if (!category.editing) {
      if (category.newName && category.newName.trim() !== '') {
        this.updateCategory(category);
      } else {
        delete category.newName;
      }
    } else {
      category.newName = category.name;
    }
  }
  
// function will send an http post request to Backend Api to update the existing category by id
  updateCategory(category: any): void {
    this.http.post(`http://localhost:8080/spendwise/category/${category.categoryId}/update`, { categoryName: category.newName })
      .subscribe({
        next: (response: any) => {
          category.categoryName = category.newName;
          delete category.newName;
        },
        error: (httpErr: HttpErrorResponse) => {
          if (httpErr.error && httpErr.error.error) {
            this.errorMsg = httpErr.error.error;
          } else {
            this.errorMsg = 'Unexpected Error Occurs...please try later';
          }
          alert(this.errorMsg);
        }
      });
  }
  
}
