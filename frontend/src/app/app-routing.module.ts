import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditingComponent } from './expenses/editing/editing.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';
import { AddComponent } from './expenses/add/add.component';
import { ExpenseManagementDashboardAppComponent } from './expenses/expense-management-dashboard-app/expense-management-dashboard-app.component';

const routes: Routes = [
    {path:'spendwise/register/users', component: RegistrationComponent},
    { path:'spendwise/login', component: LoginComponent},
    {path:'spendwise/expense/edit/:id',component:EditingComponent},
    {path:'spendwise/expense/add',component:AddComponent},
    {path:'spendwise/expense/list',component:ExpenseListComponent},
    {path:'spendwise/expense-dashboard', component:ExpenseManagementDashboardAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
