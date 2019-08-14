import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public display = false;
  public items: MenuItem[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Student Pay',
        command: (click: Event): void => {
          this.router.navigateByUrl('student');
          this.display = false;
        }
      }
    ];
  }

}
