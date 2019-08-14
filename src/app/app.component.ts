import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MultyForm';
  items: MenuItem[];
  activeIndex = 0;
  constructor() {}
  ngOnInit() {
    this.items = [
      {label: 'Full Name'},
      {label: 'Address'},
      {label: 'Phone Number'}
    ];

  }
}
