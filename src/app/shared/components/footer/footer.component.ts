import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu-list>
      <p>&copy; Copyright 2023 | {{ myName }}</p>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  myName = 'Arun';

  constructor() {}

  ngOnInit(): void {}
}
