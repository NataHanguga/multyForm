import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent {
  @Input() message: string = 'Go away';
  @Output() closeDialog = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { }

}
