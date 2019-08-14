import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent {
  @Input() display: boolean;
  @Input() teacherName: string;
  @Output() closeDialog = new EventEmitter();
  @Output() list = new EventEmitter();

  constructor() { }

  public cancel() {
    this.closeDialog.emit(!this.display);
  }

  public saveEditName() {
    this.list.emit(this.teacherName);
    this.cancel();
  }

}
