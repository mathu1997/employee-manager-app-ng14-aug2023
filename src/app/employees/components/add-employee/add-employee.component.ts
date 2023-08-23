import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: create a variable to store the FormGroup object 
  addEmployeeForm!: FormGroup;

  constructor() {
    // Step 1 continues: create an object for FormGroup class
    this.addEmployeeForm = new FormGroup({
      // Step 2: create a FormControl object for each form control
      // for step 3 -- ref html file
      name: new FormControl('', Validators.required), // step 5: Let's have the validation for name field
      phone: new FormControl('', Validators.required), // for step 6 -- ref html file 
      email: new FormControl('', [Validators.required, Validators.email]) // for step 7 -- ref html file
    });

    console.log(this.addEmployeeForm);
  }

  ngOnInit(): void {
  }

  // step 8: setting up an event handler for the form submission
  handleAddEmployee() {
    console.log(this.addEmployeeForm.value);
  }

}
