import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-float-input',
    template: `
        <div class="ui-float-label">
            <input
                #input
                type={{type}}
                pInputText
                class={{class}}
                min={{min}}
                max={{max}}
                (change)="setEmployeeValue($event.target.value)"
            />
            <label for="input">{{label}}</label>
        </div>
    `,
    styles: [
        `.ui-inputtext.sm-input {
            width: 145px !important;
        }
        .ui-inputtext.lg-input {
            width: 300px !important;
        }
        `
    ]

})
export class FloatInputComponent implements OnInit {
    @Input() type: string = 'number';
    @Input() class: string = 'sm-input';
    @Input() min: string;
    @Input() max: string;
    @Input() label: string = 'Label';
    @Output() value = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    public setEmployeeValue(event): void {
        console.log(event);
        this.value.emit(event);
    }
}
