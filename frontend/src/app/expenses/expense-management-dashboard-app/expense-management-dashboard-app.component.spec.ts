import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseManagementDashboardAppComponent } from './expense-management-dashboard-app.component';

describe('ExpenseManagementDashboardAppComponent', () => {
  let component: ExpenseManagementDashboardAppComponent;
  let fixture: ComponentFixture<ExpenseManagementDashboardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseManagementDashboardAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseManagementDashboardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});