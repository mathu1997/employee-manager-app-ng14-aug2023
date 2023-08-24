import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: create a variable to store the FormGroup object 
  addEmployeeForm!: FormGroup;
  isSaved = false;

  constructor( private employeesService: EmployeesService) { // Dependency Injection
    // Step 1 continues: create an object for FormGroup class
    this.addEmployeeForm = new FormGroup({
      // Step 2: create a FormControl object for each form control
      // for step 3 -- ref html file
      name: new FormControl('John', Validators.required), // step 5: Let's have the validation for name field
      phone: new FormControl('1234567', Validators.required), // for step 6 -- ref html file 
      email: new FormControl('j@k.com', [Validators.required, Validators.email]) // for step 7 -- ref html file
    });
  }

  ngOnInit(): void {
  }

  // step 8: setting up an event handler for the form submission
  handleAddEmployee() {
    console.log(this.addEmployeeForm.value);

    // Step #1 of Form Submission. Send the above the data to the service class
    this.employeesService.createEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => { // Step #2 of Form Submission.Get the response from the service class
        console.log(res);
        this.isSaved = true;
        // reset the form after submission if successful
        this.addEmployeeForm.reset();
      });
  }

}
