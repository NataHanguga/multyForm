import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent {
  @Input() message = 'Go away';
  @Input() type = '';
  @Input() display = false;
  @Output() closeDialog = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { console.log(this.message); }

  public close(): void {
    this.display = false;
    this.closeDialog.emit();
  }

  public deleted(): void {
    this.delete.emit();
    this.close();
  }
}
