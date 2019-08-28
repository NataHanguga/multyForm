import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // public items: MenuItem[];
    constructor() { }

    ngOnInit() {
    //     this.items = [
    //         {
    //             label: 'Student Pay',
    //             icon: 'pi pi-money-bill',
    //             routerLink: '/student'
    //         },
    //         {
    //             label: 'Teachers Tarifs',
    //             icon: 'pi pi-file-o',
    //             routerLink: '/teachers'
    //         }
    //     ];
    }

}
