import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  renderAdditionalContent: boolean = false;
  isSidebarOpen: boolean = false;
  firstName = 'Anisha';
  lastName = 'Rani';


  constructor(private router: Router) {
    // Subscribe to router events to detect navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the home page
        this.renderAdditionalContent = event.urlAfterRedirects === '/Home';
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  

 
}
