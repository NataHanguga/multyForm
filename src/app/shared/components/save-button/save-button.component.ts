import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-save-button',
    template: `
        <button
            pButton
            icon="pi pi-check"
            class="ui-button-success"
            type="button"
            label="Save"
            (click)="save($event)"
        ></button>
    `,
    styles: [
        `
            .ui-button {
                width: 150px !important;
            }
        `
    ]
})
export class SaveButtonComponent {
    @Output() saved = new EventEmitter();

    public save(event): void {
        this.saved.emit();
    }
}
