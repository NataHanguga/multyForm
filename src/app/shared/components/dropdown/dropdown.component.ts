import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dropdown',
  template: `
  <p-dropdown
    [options]="items"
    [style]="{'width':'300px', 'margin': '5px 0'}"
    [(ngModel)]="value"
    (onChange)="editValue($event.value)"
  ></p-dropdown>`
})
export class DropdownComponent {
  @Input() items: SelectItem[];
  @Input() value: string;
  @Output() edit = new EventEmitter<string>();
  constructor() { }

  public editValue(event) {
    this.edit.emit(event);
  }

}
