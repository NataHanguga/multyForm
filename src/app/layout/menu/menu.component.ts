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
              icon: 'pi pi-users',
              routerLink: '/teachers'
          },
          {
            label: 'Setting',
            icon: 'pi pi-cog',
            // routerLink: '/setting'
            items: [
              {
                label: 'Student pay tarif',
                icon: 'pi pi-dollar',
                routerLink: '/setting/pay-constant'
              },
              {
                label: 'Teachers Categories',
                icon: 'pi pi-list',
                routerLink: '/setting/teacher-categories'
              },
              {
                label: 'Education',
                icon: 'fa fa-graduation-cap',
                routerLink: '/setting/education'
              }
            ]
          }
      ];
  }
}
