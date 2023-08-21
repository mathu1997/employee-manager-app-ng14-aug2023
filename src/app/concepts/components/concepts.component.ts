import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent {
  // create all your public or private variables
  // interpolation related
  appName: string = 'Employee Manager Plus App!';
  // property binding related
  companyName = 'Cognizant';
  // two way binding related
  courseName = 'Angular 14';

  // for custom prop binding (parent to child comp commn)
  user = {
    name: 'John',
    age: 23
  }

  // Step 5 of Custom Event Binding: Let's save the data in a variable
  reportStatus: any;

  // for directives
  isLoggedIn = false;
  skills = ['html', 'js', 'ng', 'react'];

  constructor() { }

  // public method
  handleClickMe(event: any) {
    console.log(event);
    event.target.innerText = 'Clicked';
    // TODO: Disable the button on click
  }

  // Step 3 of Custom Event Binding: Let's have the event handler
  handleReportGenerated(event: any){
    console.log(event);
    this.reportStatus = event;
  }
}
