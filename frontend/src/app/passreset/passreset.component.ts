import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from '../services/reset-password.service';
import { HttpErrorResponse } from '@angular/common/http';


interface ResetRequest {
  email: string;
  password: string;
}

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css']
})
export class PassresetComponent implements OnInit {
  user: ResetRequest = { email: '', password: '' };
  confirmPassword: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private resetPasswordService: ResetPasswordService) {}

  ngOnInit() {
  }

  async resetPassword(): Promise<void> {
    if (!this.user.password) {
      this.errorMessage = 'Please enter your new password.';
      return;
    }

    if (!this.confirmPassword) {
      this.errorMessage = 'Please confirm your new password.';
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const resetData: ResetRequest = {
      email: this.user.email,
      password: this.user.password
    };

    this.resetPasswordService.resetPassword(resetData)
      .subscribe({
        next: (response) => {
          console.log('Password Reset Successful:', response);
          alert('Password Reset Successful !!!');
          this.router.navigate(['/Login']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Password reset failed:', error);

          let errorMessage = 'Something went wrong...Please try again later.';
          if (error.error) {
            console.log(error.error);
            errorMessage = error.error.message || error.error.error;
          }

          this.errorMessage = errorMessage;
          alert(errorMessage);
        }
      });
  }

}
