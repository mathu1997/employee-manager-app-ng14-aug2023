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
  

  constructor() { }
}
