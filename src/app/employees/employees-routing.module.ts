import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule } from '@angular/router';

// nested or child routes
const employeesRoutes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent } // id -- is URL Param
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(employeesRoutes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
