import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  // CRUD Operations
  // Create Employee
  createEmployee(employee: IEmployee): Observable<IEmployee> {
    // Step 1: Get the form data from the comp
    console.log(employee);
    // Step 2: send the above form data to the REST API
    // Step 2.1: What is the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // Step 2.2: What is the Http Method? POST
    // Step 2.3: What is the REST API Client? HttpClient
    return this.http
      .post<IEmployee>(
        'https://jsonplaceholder.typicode.com/users',
        employee
      )
      .pipe(
        map((res: IEmployee) => {
          // Step 3: get the response from the REST API
          console.log(res);
          return res; // Step 4: send the response to the comp
        })
      );
    // TODO: Handle the error
  }

  // Read
  getEmployees(): Observable<IEmployee[]> {
    // 1. get the req from the comp
    // 2. send the req to the REST API
    // Step 2.1: What is the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // Step 2.2: What is the Http Method? GET
    // Step 2.3: What is the REST API Client? HttpClient
    return this.http
      .get<IEmployee[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: IEmployee[]) => {
          // sort, filter, remove, add, convert, add, append
          // Step 3: get the response from the REST API
          console.log(res);
          return res; // Step 4: send the response to the comp
        })
      )
  }
  
  getEmployeeById(employeeId: string | null): Observable<IEmployee> {
    return this.http
      .get<IEmployee>(
        'https://jsonplaceholder.typicode.com/users/' + employeeId
      )
      .pipe(
        map((res: IEmployee) => {
          console.log(res);
          return res;
        })
      );
  }

  // Update
  // Delete
}
