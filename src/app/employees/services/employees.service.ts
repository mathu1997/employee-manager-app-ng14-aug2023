import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  
  // CRUD Operations
  // Create Employee
  createEmployee( employee: any) { // Step 1: Get the form data from the comp
    console.log(employee);
    // Step 2: send the above form data to the REST API 
    // Step 2.1: What is the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // Step 2.2: What is the Http Method? POST
    // Step 2.3: What is the REST API Client? HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', employee)
      .pipe(map((res: any) => { // Step 3: get the response from the REST API
        console.log(res);
        return res;  // Step 4: send the response to the comp 
      }));
    // TODO: Handle the error
  }

  // Read
  getEmployees() { // 1. get the req from the comp
    // 2. send the req to the REST API
    // Step 2.1: What is the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // Step 2.2: What is the Http Method? GET
    // Step 2.3: What is the REST API Client? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res: any) => { // Step 3: get the response from the REST API
        console.log(res);
        return res;  // Step 4: send the response to the comp 
      }));
  }

  // Update
  // Delete
}
