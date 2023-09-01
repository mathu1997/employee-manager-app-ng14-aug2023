import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit {
  employees!: IEmployee[];

  constructor(private employeesService: EmployeesService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // whenever the comp is coming into view -- this will be called.
    // ideal place for your async calls
    // 1. send a req to the service on loading of the comp
    this.employeesService.getEmployees() // 2. get the resp from the service
      .subscribe((res: IEmployee[]) =>{
        console.log(res);
        this.employees = res;
      });
  }
}
