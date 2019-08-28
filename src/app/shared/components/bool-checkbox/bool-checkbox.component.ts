import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bool-checkbox',
    template: `
    <div [style]="{'display': 'flex', 'align-items': 'center'}">
        <p-checkbox
            [binary]="true"
            [(ngModel)]="value"
            (onChange)="selectCheckbox($event)">
        </p-checkbox>
        <span
            [style]="{'margin-left':'10px'}"
            [ngStyle]="{ color: value ? 'black' : 'gray' }">
        {{label}}</span>
    </div>
    `,
    styles: [
        `span {
            color: gray;
        }`
    ]
})
export class BoolCheckboxComponent implements OnInit {
    @Input() value: boolean = false;
    @Input() label: string;
    @Output() valueChange = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    public selectCheckbox(e: boolean): void {
        this.valueChange.emit(e);
    }

}
