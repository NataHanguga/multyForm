import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() showMenu = true;
    @Output() showMenuChange = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {

    }

    public changeDisplay() {
        const icon = document.getElementById('icon') as HTMLSpanElement;
        this.showMenuChange.emit(!this.showMenu);
        icon.className = !this.showMenu ? 'pi pi-chevron-circle-right' : 'pi pi-chevron-circle-left';
    }

}
