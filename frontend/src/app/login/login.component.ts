import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  subscription: Subscription | undefined;

  constructor(private authService: AuthserviceService, private router: Router) {}

  onLogin() {
    this.subscription = this.authService.login(this.email, this.password).subscribe({
      next: response => {
        this.router.navigate(['/Home']);
      },
      error: error => {
        console.error('Login failed', error);
        this.errorMessage = error;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}