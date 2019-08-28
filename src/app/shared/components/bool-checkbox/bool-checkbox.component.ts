import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bool-checkbox',
    template: `<p-checkbox [binary]="true" [(ngModel)]="value" (onChange)="selectCheckbox($event)"></p-checkbox>`
})
export class BoolCheckboxComponent implements OnInit {
    @Input() value: boolean = false;
    @Output() valueChange = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    public selectCheckbox(e: boolean): void {
        this.valueChange.emit(e);
    }

}
