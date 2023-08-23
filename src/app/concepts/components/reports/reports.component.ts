import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="text-bg-secondary p-3">
      <h5>Here you can generate report | This is Child Component</h5>
      <button class="btn btn-warning" (click)="handleGenerateReport()">
        GENERATE REPORT
      </button>
    </div>
  `,
  styles: [],
})
export class ReportsComponent implements OnInit {
  // Step 1: create a variable and make it a custom event
  // Step 1.1 create an object for EventEmitter
  // Step 1.2 Let's make it as custom event with @Output()
  @Output() reportGenerated: EventEmitter<any> = new EventEmitter();
  // Step 2: Let's bind the above custom event in the concepts.comp.html

  constructor() {}

  ngOnInit(): void {}

  handleGenerateReport() {
    console.log('Report will be generated');

    // Step 4: Let's trigger / emit the custom event
    this.reportGenerated.emit({
      reportId: 5342678,
      status: 'Report Generated Successfully!',
    }); // sending the data as well
  }
}
