import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
  employee!: IEmployee;
  dupEmployee!: IEmployee;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Let's read the URL param using activatedRoute
    const employeeId = this.route.snapshot.paramMap.get('id');
    // let's send req to rest api thru service
    this.employeesService
      .getEmployeeById(employeeId)
      .subscribe((res: IEmployee) => {
        console.log(res);
        this.employee = res;
        // cloning the employee
        this.dupEmployee = { 
          ...this.employee
        };
      });
  }

  handleUpdateEmployee(formData: any) {
    // console.log(formData);
    console.log(this.dupEmployee);

    // TODO: Submit the above data to the service and get it saved in REST API
  }
}
