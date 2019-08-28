import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cancel-button',
    template: `
        <button
            pButton
            icon="pi pi-times"
            class="ui-button-secondary"
            type="button"
            label="Cancel"
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
export class CancelButtonComponent {
    @Output() cancel = new EventEmitter();

    public save(event): void {
        this.cancel.emit();
    }
}
