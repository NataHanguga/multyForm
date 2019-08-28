import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[];
  constructor() { }

  ngOnInit() {
      this.items = [
          {
              label: 'Student Pay',
              icon: 'pi pi-money-bill',
              routerLink: '/student'
          },
          {
              label: 'Teachers Tarifs',
              icon: 'pi pi-file-o',
              routerLink: '/teachers'
          }
      ];
  }
}
