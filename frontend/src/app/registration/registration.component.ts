import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  public user = { // Keep user object
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }; 
  confirmPassword: string = '';
  errorMsg = '';
  isError = false; 

  registrationForm!: FormGroup; // Declare form group

  passwordMatchValidator(control:FormControl) {
    const password = control.root.get('password');
    const confirmPassword = control;
  
    // Check if password and confirmPassword are both set and don't match
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMatch: true }; // Return an error object with a specific key
    }
  
    return null; // No error if passwords match or aren't set
  }
  

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  formSubmit() {
    if (this.registrationForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    // Populate user object from form values
    this.user.firstName = this.registrationForm.get('firstName')?.value;
    this.user.lastName = this.registrationForm.get('lastName')?.value;
    this.user.email = this.registrationForm.get('email')?.value;
    this.user.password = this.registrationForm.get('password')?.value;


    // Submit user data using user service (logic remains the same)
    this.userService.addUser(this.user).subscribe({
      next: (data) => { 
        console.log('Registration successful:', data);
        alert('Registration Successful!');
        this.router.navigate(['/Login']);
        this.errorMsg = ''; // Clear error message on success
        this.isError = false;
      },
      error: (error: HttpErrorResponse) => { // Error handler
        console.error('Registration failed:', error);
    
        // Extract error message from backend response (assuming it's in the 'error' property)
        let errorMessage = 'Something went wrong...Please try again later.';
        if (error.error) {
          console.log(error.error); // Inspect error object structure in console
          // Access specific property holding the error message (adjust property name as needed)
          errorMessage = error.error.message || error.error.error; // Handle potential property variations
        }
    
        this.errorMsg = errorMessage;
        this.isError = true; // Set error flag to indicate error state
        alert(errorMessage); // Display extracted error message in alert popup
      },
    });
  }
  
  markTouched(field: string) {
    this.registrationForm.get(field)?.markAsTouched();
  }

  
  updateFormControl(fieldName: string, value: any) {
    if ((this.user as { [key: string]: any })[fieldName] !== value) {
      (this.user as { [key: string]: any })[fieldName] = value;
      const control = this.registrationForm.get(fieldName);
      if (control) {
        control.markAsDirty();
      }
    }
  }
}

export class User {
  firstName: string;
  lastName:string;
  email: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }
}

